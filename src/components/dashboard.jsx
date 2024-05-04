import React from 'react';
import '../dashboard.css'; // Import CSS file for styling

function Dashboard() {
    // Sample data for received emails
    const sampleData = [
        { time: '10:00 AM', sender: 'example@example.com', subject: 'Sample Subject 1', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', important: false },
        { time: '11:30 AM', sender: 'john.doe@example.com', subject: 'Sample Subject 2', summary: 'Nulla facilisi. Aenean et tortor eu metus condimentum aliquam vel non nisi.', important: true },
        { time: '1:45 PM', sender: 'jane.doe@example.com', subject: 'Sample Subject 3', summary: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', important: false },
        // Add more sample data here
        { time: '3:00 PM', sender: 'example@example.com', subject: 'Sample Subject 4', summary: 'Vestibulum condimentum aliquet justo, at convallis tortor malesuada eget.', important: false },
        { time: '4:30 PM', sender: 'john.doe@example.com', subject: 'Sample Subject 5', summary: 'Integer sed risus ac lacus feugiat vestibulum.', important: true },
        { time: '6:45 PM', sender: 'jane.doe@example.com', subject: 'Sample Subject 6', summary: 'Curabitur tincidunt feugiat justo, eu feugiat enim lacinia id.', important: false },
        // Add more sample data as needed
    ];

    return (
        <div className="dashback">
        <div className="dashboard">
            <h2>Mail Details</h2>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Sender</th>
                        <th>Subject</th>
                        <th>Summary</th>
                        <th>Important</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sampleData.map((email, index) => (
                        <tr key={index} className={email.important ? 'important' : ''}>
                            <td>{email.time}</td>
                            <td>{email.sender}</td>
                            <td>{email.subject}</td>
                            <td>{email.summary}</td>
                            <td>{email.important ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;

