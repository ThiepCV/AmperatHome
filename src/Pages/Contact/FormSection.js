import React, { useState } from 'react';
import axios from 'axios';
import './FormSection.css';


const FormSection = () => {
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit =  async (event) => {
    event.preventDefault();

    if (!nickname || !phoneNumber || !address || !email || !content || !termsAccepted) {
      alert('Please fill in all required fields and accept the terms and conditions.');
      return;
    }
    const date = new Date();
    const time = date.toLocaleDateString()
    // const time = date.toISOString() + date.getMonth() + date.getDay() + date.getHours()
    console.log(time);
    const formData = {
      nickname,
      phoneNumber,
      address,
      email,
      content,
      termsAccepted,
      time
    };
  
    
      //  axios.post('https://sheet.best/api/sheets/a203207f-9f5e-45f5-b4ac-d0df13a53cd2', formData).then((response) =>{
      //         if (response.status === 200) {
      //   alert('Your message has been sent successfully!');
      //   // Reset form
      //   setNickname('');
      //   setPhoneNumber('');
      //   setAddress('');
      //   setEmail('');
      //   setContent('');
      //   setTermsAccepted(false);
      // } else {
      //   alert('There was an error sending your message.');
      // }

      //  })
      
      try {
        const response = await axios.post('https://sheet.best/api/sheets/08c2f0f5-c318-443d-a935-78a8b3f1dbc1', formData);
    
        if (response.status === 200) {
          alert('Your message has been sent successfully!');
          // Reset form
          // setNickname('');
          // setPhoneNumber('');
          // setAddress('');
          // setEmail('');
          // setContent('');
          // setTermsAccepted(false);
        } else {
          alert('There was an error sending your message.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message.');
      }
    };
   


  return (
    <div className="form-section">
      <div className="form-container">
        <div className="form-left">
          <h2>お問い合わせ</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nickname">ニックネーム</label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phoneNumber">電話番号</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">住所</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="content">お問い合わせ内容</label>
              <textarea
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
                required
              />
              <label htmlFor="terms">利用規約とプライバシーポリシーに同意します。</label>
            </div>
            <button type="submit" className="btn">送信する</button>
          </form>
        </div>
        <div className="form-right">
          <img src="../images/contact-img.png" alt="お問い合わせイメージ" />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
