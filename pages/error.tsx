import ChangeLanguage from '@/components/ChangeLanguage';
import Modal from '@/components/Modal';
import style from '../styles/errorSttyle.module.css';
import Image from 'next/image';

const folder = '/';

const error = () => {
  return (
    <div className={style.contentVideo}>
      <div className={style.contentHeader}>
        <div className={style.logo}>
          <Image src={folder + 'logo.svg'} alt={''} width={280} height={50} />
        </div>
        <div>
          <ChangeLanguage />
        </div>
      </div>
      <video id="background-video" loop autoPlay muted className={style.video}>
        <source
          src="https://capital-city.s3.amazonaws.com/resources/public/videos/background-capital-city.mp4"
          type="video/mp4"
        />
      </video>
      <div
        style={{
          color: 'white',
        }}>
        <Modal />
      </div>
    </div>
  );
};

export default error;
