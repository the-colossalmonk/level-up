import React from 'react';
import { supabase } from '../supabaseClient';
import CloseIcon from '../assets/icons/Close.svg';
import gsap from 'gsap';
// (useState and useEffect are also imported from React)
import { useState, useEffect } from 'react';


export const RegistryModal = ({ onClose }) => {
  const [step, setStep] = useState('info'); // 'info', 'form', 'success'
  const [hunterCount, setHunterCount] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', primary_goal: 'Strength' });
  const [error, setError] = useState('');

  useEffect(() => {
    const getInterestCount = async () => {
      const { data, error } = await supabase
        .from('interest_counter').select('count').eq('id', 1).single();
      if (error) { console.error("Supabase fetch error:", error); return; }
      if (data) {
        gsap.to({ val: hunterCount }, {
          val: data.count,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() { setHunterCount(Math.round(this.targets()[0].val)); }
        });
      }
    };
    getInterestCount();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { error: insertError } = await supabase.from('subscribers').insert([formData]);
    if (insertError) { setError('This Hunter is already registered.'); return; }
    await supabase.rpc('increment_interest', { row_id: 1 });
    setStep('success');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>

        {step === 'info' && (
          <div className="modal-step">
            <h2 className="section-title" style={{ marginTop: 0 }}>[ Join the Vanguard ]</h2>
            <div className="stat" style={{margin: '40px 0'}}>
              <h3>{hunterCount}</h3>
              <p>Hunters Awaiting Activation</p>
            </div>
            <p className="section-subtitle" style={{fontSize: '1rem'}}>The registry is now open for early access invitations. Be among the first to gain access.</p>
            <button className="system-button" onClick={() => setStep('form')}>
              Join the Waitlist
            </button>
          </div>
        )}

        {step === 'form' && (
          <div className="modal-step">
            <h2 className="section-title" style={{ marginTop: 0 }}>[ Secure Your Spot ]</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Title [Name]</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <label htmlFor="email">System Channel [Email]</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <label htmlFor="primary_goal">Primary Stat to Level Up?</label>
              <select id="primary_goal" name="primary_goal" value={formData.primary_goal} onChange={(e) => setFormData({...formData, primary_goal: e.target.value})}>
                <option value="Strength">Strength (Physical)</option>
                <option value="Intellect">Intellect (Mental)</option>
                <option value="Agility">Agility (Consistency)</option>
              </select>
              {error && <p style={{color: '#ff4d4d', textAlign: 'center', fontFamily: 'Cinzel, serif'}}>{error}</p>}
              <button type="submit" className="system-button">[ Join Waitlist ]</button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="thank-you-message">
            <h3>Your Spot is Secured!</h3>
            <p>The System has acknowledged your request. We'll be in touch with your invitation soon. Welcome, Hunter.</p>
          </div>
        )}
      </div>
    </div>
  );
};