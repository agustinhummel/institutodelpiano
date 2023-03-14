import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendario = () => {


    const [state, setState] = useState({
      currentEvents: []
    })

    const handleDateSelect = (selectInfo) => {
      let title = prompt('Crea el nombre del evento')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() 

      if (title) {
        calendarApi.addEvent({
        
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    }

    const handleEventClick = (clickInfo) => {
      if (confirm(`Desea eliminar el evento '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
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
      <div className='demo-app sm:w-auto h-auto  md:mx-20 my-16 w-auto h-auto shadow-xl border-option1-color'>
        <div className='demo-app-sidebar'>
        <h1 className="flex justify-center px-5 pt-8 pb-2 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 ">
            Calendario de Eventos
          </h1>
          <div className='demo-app-sidebar-section'>

          </div>

          </div>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={state.weekendsVisible}
            select={handleDateSelect}
            eventContent={renderEventContent} 
            eventClick={handleEventClick}
            eventsSet={handleEvents} 
            locale={'Es'}
          />
        </div>

      </div>
    )
  }

export default Calendario;