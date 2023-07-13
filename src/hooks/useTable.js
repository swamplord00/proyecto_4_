import { useState } from "react";

import React from 'react'
import { db } from "../firebase/firebase";

export const useTable = (initialArray=[],userId) => {
    const [infoBookingArray,setInfoBookingArray]=useState(initialArray)

    const getDataForm=async()=>{
        await db.collection('reservas').onSnapshot((querySnapshot)=>{
        const booking=[]
        querySnapshot.forEach((book)=>{
            booking.push({...book.data(), id:book.id})
        })
        const filteredBooking=booking.filter((el)=>el.userId===userId)
        setInfoBookingArray(filteredBooking)
        console.log(filteredBooking)
        console.log(infoBookingArray)
        })
    }
    return {
        infoBookingArray,
        getDataForm
    }
        
    
}


