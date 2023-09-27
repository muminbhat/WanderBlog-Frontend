import React from 'react'
import { Footer } from 'flowbite-react';

const Footerr = () => {
  const currentYear = new Date().getFullYear();
    return (
      <>
      <hr className="w-90 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />
        <Footer container className='p-8'>
          <Footer.Copyright className='mx-5'
            by="WANDERBLOG™"
            year={currentYear}
          />
          <Footer.LinkGroup>
            <Footer.Link className='mx-5' href="/about">
              About
            </Footer.Link>
            <Footer.Link className='mx-5' href="/maintenance">
              Privacy & Policy
            </Footer.Link>
            <Footer.Link className='mx-5' href="/maintenance">
              Licensing
            </Footer.Link>
            <a href="mailto:mumin.fayaz05@gmail.com">
            <Footer.Link className="cursor-pointer">
              Contact
            </Footer.Link>
          </a>
          </Footer.LinkGroup>
        </Footer>
        </>
      )
    }

export default Footerr