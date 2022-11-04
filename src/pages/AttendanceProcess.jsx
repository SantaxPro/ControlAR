import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useOperations } from '../context/OperationsContext';

export const AttendanceProcess = () => {
    const navigate = useNavigate();
    const {isCourseAttendanceReady, setIsCourseAttendanceReady} = useOperations();
    React.useEffect(() => {
        if (!isCourseAttendanceReady) {
            navigate('/courses');          
        }
        console.log("useffect")
    }, []);
  return (
    <div>
        AttendanceProcess
    </div>
  )
}
