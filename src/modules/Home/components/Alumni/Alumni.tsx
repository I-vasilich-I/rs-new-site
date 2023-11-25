import Image, { StaticImageData } from 'next/image';
import { Title, Paragraph } from 'components';
import { useWindowSize } from 'hooks';

import epam from '/public/assets/alumni/epam.png';
import toptal from '/public/assets/alumni/toptal.png';
import oxagile from '/public/assets/alumni/oxagile.png';
import dott from '/public/assets/alumni/dott.png';
import andersen from '/public/assets/alumni/andersen.png';
import godel from '/public/assets/alumni/godel.png';

import satellite from '/public/assets/alumni/satellite.png';
import itechart from '/public/assets/alumni/itechart.png';
import pandadoc from '/public/assets/alumni/pandadoc.png';
import dataart from '/public/assets/alumni/dataart.png';
import coherent from '/public/assets/alumni/coherent.png';
import elinext from '/public/assets/alumni/elinext.png';

import miro from '/public/assets/alumni/miro.png';
import qulix from '/public/assets/alumni/qulix.png';
import visualfabriq from '/public/assets/alumni/visualfabriq.png';
import sberbank from '/public/assets/alumni/sberbank.png';
import nanosoft from '/public/assets/alumni/nanosoft.png';
import aesoft from '/public/assets/alumni/aesoft.png';

type AlumniProps = {
  id: string;
  image: StaticImageData;
};

const alumni: AlumniProps[] = [
  { id: 'epam', image: epam },
  { id: 'toptal', image: toptal },
  { id: 'oxagile', image: oxagile },
  { id: 'dott', image: dott },
  { id: 'andersen', image: andersen },
  { id: 'godel', image: godel },
  { id: 'satellite', image: satellite },
  { id: 'itechart', image: itechart },
  { id: 'pandadoc', image: pandadoc },
  { id: 'dataart', image: dataart },
  { id: 'coherent', image: coherent },
  { id: 'elinext', image: elinext },
  { id: 'miro', image: miro },
  { id: 'qulix', image: qulix },
  { id: 'visualfabriq', image: visualfabriq },
  { id: 'sberbank', image: sberbank },
  { id: 'nanosoft', image: nanosoft },
  { id: 'aesoft', image: aesoft },
];

export const Alumni: React.FC = () => {
  const { width } = useWindowSize();

  let alumniArr: AlumniProps[] = [];

  if (width) {
    if (width <= 1440 && width > 810) {
      alumniArr = alumni.slice(0, 12);
    } else if (width <= 810) {
      alumniArr = alumni.slice(0, 6);
    } else {
      alumniArr = [...alumni];
    }
  }

  return (
    <div className="alumni container">
      <div className="alumni content">
        <Title text="Our alumni" hasAsterisk />
        <Paragraph>
          We are immensely proud of RS School alumni who build their successful careers in ambitious IT companies
        </Paragraph>
        <div className="alumni">
          {alumniArr.map(({ id, image }) => (
            <div key={id} className="alumni-logo-container">
              <Image className="alumni-logo" src={image} alt={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
