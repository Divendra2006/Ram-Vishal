import React from 'react'

const teachers = [
    {
      name: 'John Doe',
      photo: 'https://via.placeholder.com/100', // Replace with actual photo URLs
      note: 'John Doe has been teaching Mathematics for over 15 years, helping students excel in logical thinking and problem-solving skills.',
    },
    {
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/100',
      note: 'Jane Smith is a passionate Science teacher who loves encouraging students to explore the wonders of Physics and Chemistry.',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/100', // Replace with actual photo URLs
        note: 'John Doe has been teaching Mathematics for over 15 years, helping students excel in logical thinking and problem-solving skills.',
      },
      {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/100', // Replace with actual photo URLs
        note: 'John Doe has been teaching Mathematics for over 15 years, helping students excel in logical thinking and problem-solving skills.',
      },
      {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/100', // Replace with actual photo URLs
        note: 'John Doe has been teaching Mathematics for over 15 years, helping students excel in logical thinking and problem-solving skills.',
      },
    // Add more teachers as needed
  ];

function About() {
  return (
    <div className="max-w-7xl mx-auto p-6">
     

      {/* Chairman Section */}
      <div className="mb-8 flex items-start">
        <div className="mr-6 text-center">
          {/* Chairman Photo */}
          <img
            src="https://via.placeholder.com/150" // Replace with chairman's photo URL
            alt="Chairman"
            className="w-36 h-36 object-cover rounded-full"
          />
          <h3 className="text-lg font-bold mt-2"> VIRENDRA SINGH</h3> {/* Add Chairman's name */}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Message from the Chairman</h2>
          <p className="text-gray-700 text-lg">
            Our Chairman, Mr.Virendra Singh, has been leading the school for over two decades with a vision to
            provide quality education and build a foundation for future leaders. His commitment to holistic learning
            and personal growth has driven our school's continuous success and community development.
          </p>
        </div>
      </div>

      {/* Principal Section */}
      <div className="mb-8 flex items-start">
        <div className="mr-6 text-center">
          {/* Principal Photo */}
          <img
            src="https://via.placeholder.com/150" // Replace with principal's photo URL
            alt="Principal"
            className="w-36 h-36 object-cover rounded-full"
          />
          <h3 className="text-lg font-bold mt-2">Mukhatar Ansari</h3> {/* Add Principal's name */}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Message from the Principal</h2>
          <p className="text-gray-700 text-lg">
            Our Principal, Mr. Mukhatar Ansari, fosters a culture of academic excellence and personal
            development. Under his leadership, the school has implemented modern teaching methodologies
            and fostered a nurturing environment that helps students thrive academically and socially.
          </p>
        </div>
      </div>

      {/* Meet Our Teachers Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Meet Our Teachers</h2>
        <div className="grid gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
              {/* Teacher Photo */}
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-24 h-24 rounded-full object-cover mr-6"
              />
              {/* Teacher Note */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-gray-700">{teacher.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About