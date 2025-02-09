import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export function MailSender() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendMail = async () => {
    try {
      await axios.post("http://localhost:2000/send-mails", { subject, body });
      alert("Mail sent successfully!");
    } catch (error) {
      alert("Failed to send mail");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Futuristic Mail Sender
      </motion.h1>
      
      <div className="flex w-full max-w-4xl gap-8">
        {/* Mail Form */}
        <motion.div
          className="flex-1 bg-gray-800 p-6 rounded-2xl shadow-xl border border-blue-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-lg mb-2">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-gray-700 border border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          
          <label className="block text-lg mb-2">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="5"
            className="w-full p-3 rounded-md bg-gray-700 border border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          
          <motion.button
            className="mt-4 w-full p-3 rounded-md bg-blue-600 hover:bg-blue-500 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMail}
          >
            Send Mail
          </motion.button>
        </motion.div>

        {/* Tutorial Section */}
        <motion.div
          className="flex-1 bg-gray-800 p-6 rounded-2xl shadow-xl border border-green-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl text-green-400 font-semibold mb-4">Mail Personalization Guide</h2>
          <p className="text-gray-300">You can use the following placeholders in your email body:</p>
          <ul className="mt-3 text-green-400 space-y-2">
            <li><strong>{"{username}"}</strong> - Inserts the user's name</li>
            <li><strong>{"{email}"}</strong> - Inserts the user's email</li>
            <li><strong>{"{password}"}</strong> - Inserts the user's password</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
