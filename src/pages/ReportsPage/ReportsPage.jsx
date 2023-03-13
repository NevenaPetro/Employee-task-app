import React from 'react';
import { useContext } from 'react';
import { applicationContext } from '../../context/AplicationContext';
import Moment from 'react-moment';
import '../ReportsPage/reportsPage.css';

function ReportsPage() {
  const { tasksList, getAssigneeNameById } = useContext(applicationContext);

  function getTopFiveEmpl() {
    let finishedTasksList = tasksList.filter((e) => e.isFinished);
    var period = new Date();
    period.setMonth(period.getMonth() - 1);
    let lastMonthTasksList = finishedTasksList.filter(
      (e) => e.dateFinished.getTime() > period.getTime()
    );
    let topList = [];
    lastMonthTasksList.forEach((element) => {
      let existing = topList.find((e) => element.assignee === e.id);
      existing
        ? (existing.score += 1)
        : topList.push({ id: element.assignee, score: 1 });
    });
    topList.sort((a, b) => b.score - a.score);
    topList = topList.slice(0, 5);
    return topList;
  }
  function getUrgentTasks() {
    let unfinishedTasksList = tasksList.filter((e) => !e.isFinished);
    let now = new Date();
    unfinishedTasksList.forEach(
      (e) =>
        (e.remaingDays = Math.round(
          (e.dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24)
        ))
    );
    unfinishedTasksList.sort((a, b) => a.remaingDays - b.remaingDays);
    return unfinishedTasksList;
  }

  return (
    <div className="reports-page">
      <div className="top-empoloyees">
        <h1>Top five employees</h1>
        <h5>(who completed the largest number of tasks in past month)</h5>
        <table className="top-list-wrap">
          <tbody>
            <tr>
              <th></th>
              <th>Name: </th>
              <th>Score: </th>
            </tr>
            {getTopFiveEmpl().map((e) => (
              <tr key={e.id}>
                <td>
                  <p className="blue-dot"></p>
                </td>
                <td>
                  <p>{getAssigneeNameById(e.id)}</p>
                </td>
                <td className='center'>
                  <p><b>{e.score}</b></p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="top-empoloyees">
        <h1>Urgent tasks</h1>
        <h5>(sorted by remaining time)</h5>

        <table className="top-list-wrap">
          <tbody>
            <tr>
              <th></th>
              <th>Task Title: </th>
              <th>Task Assignee: </th>
              <th>Days Left: </th>
              <th>Due Date: </th>
            </tr>
            {getUrgentTasks().map((e) => (
              <tr key={e.id}>
                <td>
                  <p className="blue-dot"></p>
                </td>
                <td>
                  <p>{e.title}</p>
                </td>
                <td>
                  <p>{getAssigneeNameById(e.assignee)}</p>
                </td>
                <td className='center'>
                  <p><b>{e.remaingDays}</b></p>
                </td>
                <td>
                  <p>
                    <Moment format="DD/MM/YYYY">{e.dueDate}</Moment>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsPage;
