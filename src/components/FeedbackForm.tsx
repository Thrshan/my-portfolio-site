// src/components/SaySomethingForm.jsx
import React, { useState } from 'react';

const API_ENDPOINT = 'https://usebasin.com/f/5b8a8cb4708e'; // ← replace this

export default function FeedbackForm() {
    const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

interface FormData {
    name: string;
    content: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('sending');
    try {
        const formData: FormData = { name, content };
        await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        setStatus('success');
        setName('');
        setContent('');
    } catch (err) {
        console.error(err);
        setStatus('error');
    }
};

  return (
    <div className="max-w-md mx-auto bg-white bg-opacity-80 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-lg mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Say Something</h2>
      <p className="text-sm text-gray-600 mb-6">
      Hey lovely amigos, drop your best ideas, date plans, or song suggestions — anything you'd recommend for making memories together!
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            rows={4}
            required
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-2xl
                       focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-2 inline-flex justify-center items-center
                     bg-green-500 hover:bg-green-600 text-white font-medium
                     rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          {status === 'sending'
            ? 'Sending...'
            : status === 'success'
            ? 'Thank you!'
            : 'Submit'}
        </button>

        {status === 'error' && (
          <p className="mt-2 text-sm text-red-600">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
