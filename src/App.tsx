import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

import { Button } from './components/Button';
import { Input } from './components/input';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { Memo } from './components/useMemo/useMemoTS';
import { Effect } from './components/UserEffectTS/useEffectTS';
import OldYoutubeForm from './components/FormikTSform/OldYoutube';
import { YupForms } from './components/FormikTSform/YupFormik';
import { FormikFormsElement } from './components/FormikTSform/FormikFormElement';




function App() {
  const personName = {
    first: 'Dhaval',
    last: 'Doabriya'
  }

  const nameList = [
    {
      first: 'Dhaval',
      last: 'Dobariya'
    },
    {
      first: 'Dhruvil',
      last: 'Dobariya'
    },
    {
      first: 'Jenil',
      last: 'Vasoya'
    }
  ]
  return (
    <div className="App">
      <Greet name='React' messageCount={20} isloggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      {/*###############################################*/}

      <Status status='success' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar to Leonardo</Heading>
      </Oscar>

      <Greet name='Dhaval' isloggedIn={false} />

      {/*################################################*/}

      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }} />
      <Input value='' handleChange={(event) => console.log(event)} />


      {/*################################################*/}

      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>

      {/*################################################*/}

      <Private isLoggedIn={true} Component={Profile} />

      {/*################################################*/}

      <RandomNumber value={10} isPositive />

      {/*################################################*/}

      <Toast position='center' />

      {/*################################################*/}

      <hr></hr>

      <Memo></Memo>

      <Effect></Effect>

      <hr></hr>

      <h3><i><u>formik</u></i></h3>
    <OldYoutubeForm/>
   
     {/* <h3><i><u>yup formik</u></i></h3>
    <YupForms/>



      <h3><i><u>formik form ErrorMessage</u></i></h3>
      <FormikFormsElement /> */}




    </div>

  );
}

export default App;

//----------------------------------------------------------------------------//


// import './App.css';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';

// function App(){
//   return <div className='App'>
//     <Status status='success' />
//     <Heading>Placeholder Text</Heading>
//     <Oscar>
//       <Heading>Oscar to Leonardo</Heading>
//     </Oscar>

//     <Greet name='Dhaval' isloggedIn={false}/>
//   </div>
// }

// export default App;

//-------------------------------------------

// import './App.css';
// import { Button } from './components/Button';
// import { Input } from './components/input';

// function App(){
//     return <div className='App'>
//      <Button handleClick={(event,id) =>{
//       console.log('Button Clicked', event,id)
//      }}/>
//      <Input value='' handleChange={(event) => console.log(event)}/>
//     </div>
//   }

// export default App;



