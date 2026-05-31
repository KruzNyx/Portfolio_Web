import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* ส่วนแสดงลิขสิทธิ์ */}
          <div className="text-gray-600 text-sm">
            © 2026 Data Visualization & Web Developer. All rights reserved.
          </div>

          {/* ส่วนโซเชียลมีเดีย */}
          <div className="flex gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}