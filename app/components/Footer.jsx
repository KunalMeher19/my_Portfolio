import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24  px-4 sm:px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto relative z-10">
      <div className="flex border-t py-8 border-white/5 flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <div className="text-center md:text-left md:max-w-md max-w-[18rem]">
          <p className="text-white/70 text-sm leading-relaxed mb-3">
            Got a question, proposal, project, or want to work together on something?
          </p>
          <a
            href="mailto:meherardhenduabhishek@gmail.com"
            className="text-[#00eeffd2] hover:text-[#00eeffdf] text-sm font-medium underline underline-offset-4 transition-colors duration-300"
          >
            Send me an email
          </a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex items-center space-x-5">
          {/* Reusing social icons from the main page */}
          <a
            href="https://github.com/KunalMeher19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://discordapp.com/users/752035135880429598"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01f00185b13fdb4f07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Upwork logo"
            >
              <title>Upwork</title>
              <path d="M18.561 13.158
                    c-1.102 0-2.135-.467-3.074-1.227
                    l.228-1.076.008-.042
                    c.207-1.143.849-3.06 2.839-3.06
                    1.492 0 2.703 1.212 2.703 2.703
                    -.001 1.489-1.212 2.702-2.704 2.702
                    zM18.561 5.018
                    c-2.539 0-4.51 1.649-5.31 4.366
                    -1.22-1.834-2.148-4.036-2.687-5.892
                    H7.828v7.112
                    c-.002 1.406-1.141 2.546-2.547 2.548
                    -1.405-.002-2.543-1.143-2.545-2.548
                    V3.492H0v7.112
                    c0 2.914 2.37 5.303 5.281 5.303
                    2.913 0 5.283-2.389 5.283-5.303
                    v-1.19
                    c.529 1.107 1.182 2.229 1.974 3.221
                    l-1.673 7.873h2.797
                    l1.213-5.71
                    c1.063.679 2.285 1.109 3.686 1.109
                    3 0 5.439-2.452 5.439-5.45
                    0-3-2.439-5.439-5.439-5.439
                    z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Ardhendu Meher. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 