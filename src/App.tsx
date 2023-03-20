import React from 'react';

function App() {
  return (
    <>
     <section className='flow container' id="interactive-elements">
                <h2 className="numbered-title"><span>03</span> Interactive elements</h2>
                
                {/* <!-- navigation --> */}
                <div>
                  <nav>
                    <ul className='primary-navigation underline-indicators flex'>
                      <li className='active'><a className="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a></li>
                      <li ><a className="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a></li>
                      <li><a className="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a></li>
                    </ul>
                  </nav>
                </div>
                
     <div className="flex">
                    <div style={{marginTop: "5rem"}}>
                        {/* <!-- explore button --> */}
                        <a href="#" className='large-button uppercase ff-serif fs-600 text-dark bg-white'>Explore</a>
                    </div>
                    
                    <div className='flow dot' style={{marginBottom:"50vh"}}>
                        {/* <!-- Tabs --> */}
                        <div className='tab-list underline-indicators flex'>
                          <button aria-selected="true" className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2'>Moon</button>
                          <button aria-selected="false" className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2'>Mars</button>
                          <button aria-selected="false" className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2'>Europa</button>
                        </div>
                        
                        {/* <!-- Dots --> */}
                        <div className='dot-indicators flex'>
                          <button aria-selected="true" ><span className="sr-only">slide title</span></button>
                          <button aria-selected="false" ><span className="sr-only">slide title</span></button>
                          <button aria-selected="false" ><span className="sr-only">slide title</span></button>
                        </div>
                        
                        {/* <!-- Numbers --> */}
                        <div className='number-indicators flex'>
                          <button aria-selected="true" ><span className="">1</span></button>
                          <button aria-selected="false" ><span className="">2</span></button>
                          <button aria-selected="false" ><span className="">3</span></button>
                        </div>
                    </div>
                </div>
                
            </section>
  </>
  );
}

export default App;
