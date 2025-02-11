import { useState } from "react"; // ✅ Import useState
import { FaPaperPlane, FaTag, FaFileAlt, FaInfoCircle, FaUser, FaEnvelope, FaKey } from 'react-icons/fa';
import { motion } from "framer-motion";
import axios from "axios";
import './fix.css'

export function MailSender() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendMail = async () => {
    try {
      await axios.post("http://localhost:2000/send-mails", { subject, body }); 
      alert("Mail sent successfully!");
    } catch (error) {
      alert("Failed to send mail");
      console.error("Error sending mail:", error); // ✅ Log error for debugging
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <motion.div
  className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* <FaPaperPlane className="text-5xl text-blue-400 mb-4" /> */}
  <h1 className="text-xl font-semibold" style={{textAlign : 'center'}}>Interstellar Mail Console</h1>
</motion.div>

<br /><br />

      <div className="fix grid lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Mail Form */}
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="first_fix space-y-6">
            <div className="flex items-center gap-3 mb-8">
              {/* <FaFileAlt className="text-2xl text-blue-400" /> */}
              <h2 className="text-2xl font-semibold">Compose Message</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-lg mb-2 text-gray-300">
                  <FaTag className="text-blue-400" />
                  Subject:
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-blue-400/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 outline-none transition-all"
                  placeholder="Enter message subject..."
                />
              </div>
<br />
              <div>
                <label className="flex items-center gap-2 text-lg mb-2 text-gray-300">
                  <FaFileAlt className="text-blue-400" />
                  Body:
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows="6"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-blue-400/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 outline-none transition-all"
                  placeholder="Write your message here..."
                />
              </div>
            </div>
<br />
           <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
           <motion.button
              className="w-full mt-6 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 flex items-center justify-center gap-2 font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSendMail}
            >
              <FaPaperPlane className="text-lg" />&nbsp;
              Launch Message
            </motion.button>
           </div>
          </div>
        </motion.div>

        <motion.div
  className="tutorial-section"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
<h2 className="text-2xl font-semibold">Personalization Guide</h2>

  <p className="description">
    Enhance your messages using dynamic placeholders. Available variables:
  </p>

  <div className="placeholders">
    <div className="placeholder-item">
      <FaUser className="icon" />
      <div>
        <code className="code">{'{username}'}</code>
        <p>Inserts the recipient's name</p>
      </div>
    </div>

    <div className="placeholder-item">
      <FaEnvelope className="icon" />
      <div>
        <code className="code">{'{email}'}</code>
        <p>Inserts the recipient's email address</p>
      </div>
    </div>

    <div className="placeholder-item">
      <FaKey className="icon" />
      <div>
        <code className="code">{'{password}'}</code>
        <p>Inserts the recipient's password</p>
      </div>
    </div>
  </div>
</motion.div>


      </div>
    </div>
  );
}