import React from 'react'
import { useParams } from 'react-router-dom'
import useSingleCourse from '../hooks/useSingleCourse';

export const AttendanceSheet = () => {
    const {id} = useParams();
    const {course} = useSingleCourse(id)
    return (
    <div>
        AttendanceSheet
        {course?.attendanceEntrys}
    </div>
  )
}
