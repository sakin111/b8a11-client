

const Footer = () => {
    return (
    
            <footer className="bg-neutral-900 dark:bg-gray-900">
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                  <div className="mb-6 md:mb-0">
                    <div className="flex items-center">
                      <img
                        src="https://i.ibb.co/QQKmMx0/d3d9437c-f14f-4781-82cf-c713afaa5488-removebg-preview.png"
                        className="h-8 mr-3"
                        alt="Travela"
                      />
                      <span className="self-center font-custom font-ubuntu logo text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Travela
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Resources
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                          <div className="hover:underline">
                           collection
                          </div>
                        </li>
                        <li>
                          <a href="" className="hover:underline">
                            terms and Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Follow us
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="https://github.com/" className="hover:underline">
                            Github
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Discord
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Legal
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="#" className="hover:underline">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">
                            Terms & Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{' '}
                    <a href="" className="hover:underline">
                     Travela
                    </a>
                    . All Rights Reserved.
                  </span>
                  <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                   
                  </div>
                </div>
              </div>
            </footer>
      
    );
};

export default Footer;