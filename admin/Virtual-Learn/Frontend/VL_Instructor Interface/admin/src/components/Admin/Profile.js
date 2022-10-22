import React, { Component } from 'react';
import '../../CSS/Profile.css';

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} alt="Profile" />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
    <div className="addProfilePic">
      <img
        src={require('../../images/icons/icn_change profilepic@3x.png')}
        alt="addProfilePic"
        className="addProfilePicSmall"
      />
    </div>
  </label>
);

const Name = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxlength="25"
      value={value}
      placeholder="Enter your name"
      required
    />
  </div>
);

const EmailID = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="email">Email ID</label>
    <input
      id="name"
      type="email"
      onChange={onChange}
      maxlength="25"
      value={value}
      placeholder="Enter your email ID"
      required
    />
  </div>
);

const MobileNumber = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="MobileNum">Mobile Number</label>
    <input
      id="MobileNum"
      type="number"
      onChange={onChange}
      maxLength="10"
      value={value}
      placeholder="Enter your mobile number"
      required
    />
  </div>
);

const Profile = ({
  onSubmit,
  src,
  name,
  MobileNum,
  email,
  changePW,
  onClick,
}) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <div className="Profile-top">
        <div className="Profile-title">Profile</div>
        <div className="ProfileHeader">
          <div className="img-wrap">
            <img htmlFor="photo-upload" src={src} alt="Profile" />
          </div>
          <div className="ProfileName">{name}</div>
        </div>
      </div>
      <div className="ProfileField">
        <div className="ProfileFieldName">Name</div>
        <div className="ProfileFieldValue"> {name}</div>
      </div>
      <div className="ProfileField">
        <div className="ProfileFieldName">Email ID</div>
        <div className="ProfileFieldValue">{email}</div>
      </div>
      <div className="ProfileField">
        <div className="ProfileFieldName">Mobile Number</div>
        <div className="ProfileFieldValue">{MobileNum}</div>
      </div>
      <div className="ProfileField">
        <div className="ProfileFieldValue">Change Password</div>

        <div onClick={onClick} className="password">
          {' '}
          <svg
            width={11}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.44 8.795a.754.754 0 01.004 1.074L2.29 17.105a.745.745 0 01-1.073.002.788.788 0 01.002-1.09l6.023-6.08.56-.603-.555-.598-6.03-6.1a.773.773 0 010-1.075.745.745 0 011.072.001l7.15 7.233z"
              fill="#fff"
              stroke="#fff"
            />
            <mask
              id="prefix__a"
              style={{
                maskType: 'alpha',
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={11}
              height={18}
            >
              <path
                d="M9.44 8.795a.754.754 0 01.004 1.074L2.29 17.105a.745.745 0 01-1.073.002.788.788 0 01.002-1.09l6.023-6.08.56-.603-.555-.598-6.03-6.1a.773.773 0 010-1.075.745.745 0 011.072.001l7.15 7.233z"
                fill="#fff"
                stroke="#fff"
              />
            </mask>
          </svg>
        </div>
      </div>
      <button type="submit" className="edit">
        <svg
          width={20}
          height={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.592 2.352L17.778.528a1.794 1.794 0 00-2.544 0l-1.738 1.747 4.069 4.088 2.027-2.037a1.399 1.399 0 000-1.974zm-7.156.986l4.069 4.088L6.206 17.775 2.14 13.687l10.296-10.35zM.571 19.986a.464.464 0 01-.56-.553l1.028-4.64 4.066 4.089-4.534 1.104z"
            fill="#fff"
          />
        </svg>
      </button>
    </form>
  </div>
);

const ChangePassword = ({ onClick }) => (
  <div className="card">
    <div className="back" onClick={onClick}>
      <img src={require('../../images/back.png')} alt="back" />
    </div>
    <form>
      <div className="Profile-top">
        <div className="Profile-title">Change Password</div>
      </div>
      <div className="field">
        <label htmlFor="CurrentPassword">Current Password</label>
        <input
          id="CurrentPassword"
          type="password"
          placeholder="Enter your current password"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="NewPassword">New Password</label>
        <input
          id="NewPassword"
          type="password"
          placeholder="Enter your new password"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="Password">Confirm Password</label>
        <input
          id="ConfirmPassword"
          type="password"
          placeholder="Re enter your new password"
          required
        />
      </div>
      <button type="submit" className="save">
        Save{' '}
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children, onClick }) => (
  <div className="card">
    <div className="back" onClick={onClick}>
      <img src={require('../../images/back.png')} alt="back" />
    </div>
    <form onSubmit={onSubmit}>
      <div className="Profile-title">Edit Profile</div>
      {children}
      <button type="submit" className="save">
        Save{' '}
      </button>
    </form>
  </div>
);

class CardProfile extends Component {
  state = {
    file: '',
    imagePreviewUrl:
      'https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg',
    name: 'Manjay Gupta',
    email: 'viratk@gmail.com',
    MobileNum: '9844635685',
    active: 'profile',
    changePW: false,
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  editName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  editEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email,
    });
  };

  editMobileNum = (e) => {
    const MobileNum = e.target.value;
    this.setState({
      MobileNum,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      changePW: true,
    });
  };

  handleBackClick = (e) => {
    e.preventDefault();
    this.setState({
      changePW: false,
    });
  };

  handleEditBackClick = (e) => {
    e.preventDefault();
    this.setState({
      active: 'profile',
    });
  };

  render() {
    const { imagePreviewUrl, name, email, MobileNum, active, changePW } =
      this.state;

    return (
      <div>
        {active === 'edit' ? (
          <Edit onSubmit={this.handleSubmit} onClick={this.handleEditBackClick}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <MobileNumber onChange={this.editMobileNum} value={MobileNum} />
            <EmailID onChange={this.editEmail} value={email} />
          </Edit>
        ) : changePW ? (
          <ChangePassword onClick={this.handleBackClick} />
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            MobileNum={MobileNum}
            email={email}
            changePW={changePW}
            onClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}

export default CardProfile;
