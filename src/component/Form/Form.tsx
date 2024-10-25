import {Job ,Contact, Personal ,Skill , Stepper ,StepperControl ,Education ,useUserContext } from '../Context/Index'
import { useState } from "react";
import Project from './Project';
import {v4 as uuidv4} from 'uuid'

const Form = () => {
  const {userProfile} = useUserContext();
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    "Personal Information",
    "Contact",
    "Education",
    "Job History",
    "Skills & Project",
    
  ];
 
 
  
  
  const saveData = () => {
    switch (currentStep) {
      case 1:
        // Personal information is automatically managed by the context in the Personal component
        console.log('Personal info saved:', userProfile.personalInfo);
        console.log(uuidv4())
        break;
      case 2:
        // Save education data
        console.log('Education info saved:', userProfile.education);
        break;
      case 3:
        // Save job history data
        console.log('Job history saved:', userProfile.jobs);
        break;
      case 4:
        // Save skills data
        console.log('Skills saved:', userProfile.skills);
        break;
      default:
        break;
    }
  };
 


  const displayStep = (step: number): JSX.Element | null => {
    switch (step) {
     
      case 1:
        return  <Personal  />;
      case 2:
       return <Contact />
      case 3:
        return <Education />;
      case 4:
        return <Job />;
      case 5:
        return <><Skill /> <Project /></>;
      default:
        return null;
    }
  };

  return (
    
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">


    
      <Stepper steps={steps} currentStep={currentStep} />
      
      {/* Displaying the current step's content */}
      <div className="p-4">{displayStep(currentStep)}</div>

      {/* Passing the state handler to StepperControl */}
      <StepperControl
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={steps.length}
        saveData={saveData} // Pass the saveData function here
      />

    </div>
  );
};

export default Form;