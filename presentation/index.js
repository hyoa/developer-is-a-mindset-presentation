// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  stereotype1: require('../assets/stereotype.png'),
  stereotype2: require('../assets/stereotype2.gif'),
  stereotype3: require('../assets/stereotype3.gif'),
  stereotype4: require('../assets/stereotype4.jpg'),
  real1: require('../assets/real1.jpg'),
  real2: require('../assets/real2.png'),
  real3: require('../assets/real3.jpg'),
  bgHome: require('../assets/bg_home.jpg'),
  bg2: require('../assets/bg2.jpg'),
  bg3: require('../assets/bg3.jpg'),
  bgLast: require('../assets/bg_last.jpg'),
  bgThanks: require('../assets/bg_thanks.jpg')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
      theme={theme}
      >
        <Slide bgImage={images.bgHome} bgDarken={0.5} transition={['zoom']}>
          <Heading textColor="primary">
            Developer is not only a job, it's a mindset
          </Heading>
        </Slide>
        <Slide bgColor="black" textColor="primary" transition={['fade']}>
          <Heading size={6} textColor="primary">
            Les développeurs vus par le reste du monde
          </Heading>
          <List textAlign="center">
            <Appear>
              <ListItem textSize="30" style={{ marginTop: '1rem' }}>
                "Mais comment vous faites pour comprendre ce que vous écrivez ?"
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="30" style={{ marginTop: '1rem' }}>
                "Je ne pourrais jamais être développeur, je suis trop nul en math !"
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="30" style={{ marginTop: '1rem' }}>
                "Ah oui, vous des êtes des aliens vous ! Vous voyez des images dans votre 'code'."
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="30" style={{ marginTop: '1rem' }}>
                "Mais je comprends pas. Il est pas fini ton site depuis le temps ? Tu fais quoi ?"
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgImage={images.bg2} bgDarken={0.5} transition={['fade']}>
          <Heading textColor="primary">
            Un développeur c'est quoi ?
          </Heading>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Image src={images.stereotype2} />
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Image src={images.stereotype4} />
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Image src="https://media.giphy.com/media/s239QJIh56sRW/source.gif" />
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Heading textColor="primary">Les raisons sont multiples</Heading>
          <List textAlign="center" textColor="primary">
            <Appear>
              <ListItem>Une méconaissance du métier</ListItem>
            </Appear>
            <Appear>
              <ListItem>Une vision qui s'arrête au résultat</ListItem>
            </Appear>
            <Appear>
              <ListItem>Une vision altérée par les médias</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Heading textColor="white">Mais dans la réalité ?</Heading>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Image src={images.real1} width={900}/>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Image src={images.real2} width={900}/>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Image src={images.real3} />
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Heading textColor="primary">Developpeur quelque chose</Heading>
          <Appear>
            <List textColor="white">
              <ListItem>Développeur Web</ListItem>
              <ListItem>Développeur PHP</ListItem>
              <ListItem>Développeur Javascript</ListItem>
              <ListItem>Développeur back</ListItem>
              <ListItem>Développeur front</ListItem>
              <ListItem>Intégrateur</ListItem>
              <ListItem>etc....</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Heading textSize={34} textColor="primary">
            Un mot pour les gouverner tous
          </Heading>
          <Appear>
            <Text textColor="primary" textSize={20}>
              Le développeur informatique est le pro des langages informatiques, tels que C++ ou Java ! Responsable de la programmation, c'est-à-dire de la production de lignes de code, il rédige et suit un cahier des charges précisant les spécificités techniques à suivre pour créer le programme. Afin de concevoir des programmes informatiques « sur mesure », il participe en amont à l'analyse des besoins des utilisateurs, puis à la phase d'essai. En aval, il adapte le logiciel à la demande du client en apportant les retouches nécessaires. Le dévelop-peur prend en charge la formation des utilisateurs de l'application et peut même rédiger un guide d'utilisateur. Par la suite, il intervient pour effectuer la maintenance ou faire évoluer les programmes. Grâce aux progiciels (des logiciels standards de programmation prêts à être utilisés), il passe moins de temps à écrire les programmes, si bien que son activité évolue vers plus d'analyse que de programmation.
            </Text>
          </Appear>
        </Slide>
        <Slide bgImage={images.bg3} bgDarken={0.5} transition={['fade']}>
          <Heading textColor="primary">Et c'est tout ?</Heading>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Heading textColor="primary">Compétences techniques</Heading>
          <Appear>
            <List textColor="primary">
              <ListItem>Design Pattern</ListItem>
              <ListItem>Structure de données</ListItem>
              <ListItem>Algorithmie</ListItem>
              <ListItem>Tests</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="black" transition={['fade']}>
          <Heading textColor="primary">Soft skills</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>La curiosité</ListItem>
            </Appear>
            <Appear>
              <ListItem>La patience et la perséverance</ListItem>
            </Appear>
            <Appear>
              <ListItem>La créativité</ListItem>
            </Appear>
            <Appear>
              <ListItem>L'égo</ListItem>
            </Appear>
            <Appear>
              <ListItem>La communication</ListItem>
            </Appear>
            <Appear>
              <ListItem>L'empathie</ListItem>
            </Appear>
            <Appear>
              <ListItem>Aidant</ListItem>
            </Appear>
            <Appear>
              <ListItem>Organisé</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgImage={images.bgLast} bgDarken={0.5} transition={['fade']}>
          <Heading textColor="primary">Developer is a mindset</Heading>
        </Slide>
        <Slide bgImage={images.bgThanks} bgDarken={0.4} transition={['fade']}>
          <Heading textColor="primary">Thanks</Heading>
        </Slide>
      </Deck>
    );
  }
}
