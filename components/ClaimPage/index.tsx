import Scene from '@/canvas/Scene';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import carg from '../../public/animationsJson/carg.json';
import { useProvider, useSigner, useAccount } from 'wagmi';
import { chainSelected } from '@/constants/chain';
import ModalR from '../ModalR';
import Lottie from '@/components/Lottie/Lottie';
import { mint } from '@/utils/web3/Mint';
import sad from '../../public/animationsJson/sad.json';
import { GetNfts } from '@/utils/web3/getNft';
import { useTranslation } from 'react-i18next';
import { dataInfo } from '../../canvas/dataInfo';
import state from '../../canvas/Status';
import CBS from '/styles/CBS.module.css';

const folder = '/';

const ClaimBody = () => {
  const chainId: any =
    chainSelected[Number(process.env.NEXT_PUBLIC_MAINNET_TESTNET || 1)].id;
  const { address, isConnected } = useAccount();
  const [stateModal, setStateModal] = useState(false);
  const [isLoadingMyNFT, setIsLoadingMyNFT] = useState(false);
  const [stateModal2, setStateModal2] = useState(false);
  const [stateText, setStateText] = useState(false);
  const [stateWelcome, setStateWelcome] = useState(true);
  const [hasNfts, setHasNfts] = useState<any>();
  const { data: signer } = useSigner(chainId);
  const provider = useProvider(chainId);
  const { t } = useTranslation('global');
  const [url, setUrl] = useState(
    'https://capital-city.s3.amazonaws.com/resources/sdk/'
  );

  const handler = () => {
    dataInfo.map((data, index) => {
      if (data.addressId === address) {
        setUrl(
          `https://capital-city.s3.amazonaws.com/resources/sdk/${data.idProyect}.zip`
        );
      }
    });
  };

  const handleMint = async () => {
    setStateModal(!stateModal);
    const { data, hasData, hasError }: any = await mint(provider, signer);
    // setStateModal(true);
    if (!hasData || hasError) {
      setStateModal2(true);
      setStateModal(false);
    }

    if (data && !hasError) {
      // success transaction
      setStateModal(false);
      setStateText(true);
      setStateWelcome(false);
      handleGetNft();
    }
  };

  const handleGetNft = async () => {
    const { data, hasData, hasError } = await GetNfts(signer, address);
    console.log(data, hasData, hasError);
    if (!hasData) {
      setHasNfts(false);
      setIsLoadingMyNFT(false);
    }

    if (data && hasData) {
      setHasNfts(true);
      setIsLoadingMyNFT(false);
    }
  };

  useEffect(() => {
    setIsLoadingMyNFT(true);
    if (isConnected && signer && !hasNfts) {
      handleGetNft();
      handler();
    }
  }, [isConnected, signer, hasNfts]);

  return (
    <>
      <ModalR stati={stateModal}>
        <div>
          <Lottie animation={carg} />
        </div>
        <div>
          <p>{t('claim.modalProcessing')}</p>
        </div>
      </ModalR>
      <ModalR stati={stateModal2}>
        <div>
          <Lottie animation={sad} />
        </div>
        <div>
          <p>{t('claim.modalError')}</p>
        </div>
        <br />
        <div>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              handleMint();
              setStateModal2(false);
              setStateModal(true);
            }}>
            {t('claim.btnAgain')}
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              setStateWelcome(true);
              setStateModal(false);
              setStateModal2(false);
            }}>
            {t('claim.btnReturn')}
          </button>
        </div>
      </ModalR>
      <div className={CBS.container}>
        <div className={CBS.Background}>
          <Image
            className={CBS.ImageBackground}
            src={folder + 'Rectangle.svg'}
            width={50}
            height={50}
            alt=""
          />
        </div>
        <div className={CBS.InfoSection}>
          <h1>CAPITAL CITY</h1>
          <p className={CBS.Subtitle}>{t('claim.subTitle')}</p>
          <div className={CBS.SecondSubtitles}>
            <div
              style={{
                ...(stateWelcome && !hasNfts && !isLoadingMyNFT
                  ? { display: 'block' }
                  : { display: 'none' }),
              }}>
              <h3>{t('claim.titleWelcome')}</h3>
              <p className={CBS.Message}>{t('claim.description')}</p>
              <div
                className={CBS.containerBtnClaim}
                onClick={() => {
                  setStateModal(!stateModal);
                  state.zoom = true;
                }}>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleMint}>
                  <Image
                    className={CBS.IconArrow}
                    src={folder + 'Arrow.svg'}
                    width={50}
                    height={50}
                    alt=""
                  />
                  {t('claim.btnMint')}
                </button>
              </div>
            </div>
            <div
              style={{
                ...(stateText || hasNfts
                  ? { display: 'block' }
                  : { display: 'none' }),
              }}>
              <p className={CBS.Message}>{t('claim.download')}</p>
              <div className={CBS.containerBtnClaim}>
                <button type="button" className="btn btn-light">
                  <Image
                    className={CBS.IconArrow}
                    src={folder + 'ArrowDown.svg'}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <Link
                    className="text-black btn btn-outline-light"
                    href={url}
                    target="_blank">
                    {t('claim.btnDownload')}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={CBS.MapSection}>
          <div className={CBS.SFeaturedImage}>
            <Image
              className={CBS.MapImg}
              src={folder + 'Capital_map1x4.png'}
              width={50}
              height={50}
              alt=""
            />
            <Scene className={CBS.MapImgCavas} />
          </div>
          <div className={CBS.ColorsContainer}>
            <div className={CBS.ColorsContent}>
              <div className={CBS.ColorItems}>
                <Image
                  className={CBS.ColorIcons}
                  src={folder + 'circulo-azul.png'}
                  width={50}
                  height={50}
                  alt="ColorIcon"
                />
                <p className={CBS.ColorText}>{t('claim.colorBlue')}</p>
              </div>
              <div className={CBS.ColorItems}>
                <Image
                  className={CBS.ColorIcons}
                  src={folder + 'circulo-gris-claro.png'}
                  width={50}
                  height={50}
                  alt="ColorIcon"
                />
                <p className={CBS.ColorText}>{t('claim.colorWhite')}</p>
              </div>
            </div>
            <div className={CBS.ColorsContent}>
              <div className={CBS.ColorItems}>
                <Image
                  className={CBS.ColorIcons}
                  src={folder + 'circulo-gris.png'}
                  width={50}
                  height={50}
                  alt="ColorIcon"
                />
                <p className={CBS.ColorText}>{t('claim.colorGray')}</p>
              </div>
              <div className={CBS.ColorItems}>
                <Image
                  className={CBS.ColorIcons}
                  src={folder + 'circulo-verde.png'}
                  width={50}
                  height={50}
                  alt="ColorIcon"
                />
                <p className={CBS.ColorText}>{t('claim.colorGreen')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimBody;
