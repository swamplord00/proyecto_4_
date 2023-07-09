import { useState } from "react";

import React from 'react'
import { db } from "../firebase/firebase";

export const useTable = (initialArray=[]) => {
    const [infoBookingArray,setInfoBookingArray]=useState(initialArray)

    const getDataForm=async()=>{
        await db.collection('reservas').onSnapshot((querySnapshot)=>{
        const booking=[]
        querySnapshot.forEach((book)=>{
            booking.push({...book.data(), id:book.id})
        })
        setInfoBookingArray(booking)
        console.log(booking)
        console.log(infoBookingArray)
        })
    }
    return {
        infoBookingArray,
        getDataForm
    }
        
    
}


