import React from 'react'
import { Footer } from 'flowbite-react';

const Footerr = () => {
    return (
      <>
      <hr className="w-90 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />
        <Footer container className='p-8'>
          <Footer.Copyright
            by="WANDERBLOG™"
            year={2022}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </Footer>
        </>
      )
    }

export default Footerr