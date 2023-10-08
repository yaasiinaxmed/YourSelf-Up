import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useFirebase } from '../context/firebase'
import { useParams } from 'react-router-dom';
import Tasks from '../components/Tasks'
import toast from 'react-hot-toast';
import SuccessModel from '../components/SuccessModel';

function Challenge() {
  const { challenges, tasks, user} = useFirebase();
  const params = useParams();
  const [currentChallenge, setCurrentChallenge] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [taskfinished, setTaskFinished] = useState([])
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const challenge = challenges.find((challenge) => challenge.id === params.id)
    setCurrentChallenge(challenge)
  }, [challenges, params.id])

  useEffect(() => {
    const task = tasks.filter(task => task.challengeId === params.id)
    setCurrentTasks(task)
  }, [tasks, params.id])

  useEffect(() => {
    const task = currentTasks.filter((task) => task.isTrue === true);
    setTaskFinished(task);

  }, [currentTasks]);

  useEffect(() => {
    if (taskfinished.length === 21) {
      setShowSuccess(true)
    } else {
      setShowSuccess(false)
    }
  }, [taskfinished])

  useEffect(() => {
    document.title = `YourSelf up - Challenge | ${user.displayName} `
  }, [])
  
  return (
    <div className='flex flex-col pb-8'>
      {/* navbar */}
      <Nav challenge={currentChallenge} params={params}/>
      {/* tasks */}
      <div className='w-full flex flex-wrap gap-6 mt-6 px-[6%] sm:px-[12%]'>
      {currentTasks.map((task, index) => {
        return (
          <Tasks key={index} task={task} count={index} challenge={currentChallenge}/>
        )
      })}
      </div>
       {/* Success Model */}
       <SuccessModel showSuccess={showSuccess} setShowSuccess={setShowSuccess}/>
    </div>
  )
}

export default Challenge