import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 max-w-3xl mx-auto px-6">
      {submitted ? <p>Message Sent!</p> : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
          <button type="submit" className="bg-blue-600 text-white p-2 w-full">Send</button>
        </form>
      )}
    </section>
  );
}