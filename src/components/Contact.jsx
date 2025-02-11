import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-700 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border rounded bg-blue-600 text-white" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border rounded bg-blue-600 text-white" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border rounded bg-blue-600 text-white" id="message"></textarea>
          </div>
          <button className="bg-purple-800 text-white p-2 rounded" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
