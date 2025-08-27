import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import CloseIcon from '../assets/icons/Close.svg';
import gsap from 'gsap';

export const RegistryModal = ({ onClose }) => {
  const [step, setStep] = useState('info'); // 'info', 'form', 'success'
  const [hunterCount, setHunterCount] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', primary_goal: 'Strength' });
  const [error, setError] = useState('');

  // Step 1: Fetch data for the Info Panel
  useEffect(() => {
    const getInterestCount = async () => {
      const { data, error } = await supabase
        .from('interest_counter').select('count').eq('id', 1).single();
      
      if (error) {
        console.error("Supabase fetch error:", error);
        return;
      }

      if (data) {
        gsap.to({ val: hunterCount }, {
          val: data.count,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            setHunterCount(Math.round(this.targets()[0].val));
          }
        });
      }
    };
    getInterestCount();
  }, []);

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Call 1: Insert the new user into the 'subscribers' table
    const { error: insertError } = await supabase.from('subscribers').insert([formData]);
    if (insertError) {
      setError('This Hunter is already registered.');
      return;
    }
    
    // Call 2: Increment the counter using the server-side RPC function
    await supabase.rpc('increment_interest', { row_id: 1 });
    
    setStep('success'); // Move to the success message
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>

        {step === 'info' && (
          <div className="modal-step">
            <h2 className="section-title" style={{ marginTop: 0 }}>[ System Status ]</h2>
            <div className="stat" style={{margin: '40px 0'}}>
              <h3>{hunterCount}</h3>
              <p>Hunters Currently in the Registry</p>
            </div>
            <p className="section-subtitle" style={{fontSize: '1rem'}}>The System is expanding. Your potential is limitless. Join the ranks.</p>
            <button className="system-button" onClick={() => setStep('form')}>
              Proceed to Registry
            </button>
          </div>
        )}

        {step === 'form' && (
          <div className="modal-step">
            <h2 className="section-title" style={{ marginTop: 0 }}>[ Hunter's Registry ]</h2>
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
              <button type="submit" className="system-button">[ ARISE ]</button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="thank-you-message">
            <h3>Registration Complete</h3>
            <p>Your hunter registration process has been completed. The System acknowledges your will. Stand by for your awakening.</p>
          </div>
        )}
      </div>
    </div>
  );
};