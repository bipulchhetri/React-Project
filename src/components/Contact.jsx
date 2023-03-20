import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>contact us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder='Name'/>
          </div>
          <div>
            <label >Email</label>
            <input type="email" required placeholder='Email'/>
          </div>
          <div>
            <label >Message</label>
            <input type="text" required placeholder='Type '/>
          </div>
          <button>Submit</button>
        </form>
      </main>
      
    </div>
  )
}

export default Contact
