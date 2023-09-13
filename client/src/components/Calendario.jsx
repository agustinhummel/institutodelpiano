import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAllEvent} from '../Redux/actions';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {desc} from '../functions'

const Calendario = () => {

    const allEvent = useSelector((state)=> state.eventos.map((e)=> ({id: e.id, title: e.name, start: e.start, end: e.end, description: e.description})))
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllEvent())
    }, [])

    const [state, setState] = useState({
      currentEvents: []
    })



    const handleEventClick = (e) => {
      let event = allEvent.find((eve)=> e.event.id == eve.id )
      desc(event.title, event.description)
      
    }

    const handleEvents = (events) => {
      setState({
        currentEvents: events
      }) 
    }
  
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
    return (
      <div className='sm:w-auto h-auto  mx-auto my-16 w-auto max-w-7xl justify-center  border-option1-color'>
        <div className="flex justify-center">
          <h1 className="px-5 pt-8 pb-2 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 mb-20">
            Calendario
          </h1>
        </div>
        <div className='shadow-2xl border-2'>
        { Object.values(allEvent)?.length ? 
         <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={state.weekendsVisible}
            initialEvents={allEvent}
            eventContent={renderEventContent} 
            eventClick={handleEventClick}
            eventsSet={handleEvents} 
            locale={'Es'}
          />: <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={state.weekendsVisible}
          eventContent={renderEventContent} 
          eventClick={handleEventClick}
          eventsSet={handleEvents} 
          locale={'Es'}
        /> }
        </div>
      </div>
    )
  }

export default Calendario;