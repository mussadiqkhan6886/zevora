import React from 'react'

// Mocking the data structure based on your Mongoose Schema
interface IReview {
  _id: string;
  name: string;
  message: string;
  createdAt: string;
}

const dummyReviews: IReview[] = [
  { 
    _id: '1', 
    name: 'Sarah Connor', 
    message: 'The integration was seamless and the performance is top-notch. Highly recommended!', 
    createdAt: new Date().toISOString() 
  },
  { 
    _id: '2', 
    name: 'Marcus Wright', 
    message: 'Excellent UI components. Saved me weeks of development time.', 
    createdAt: new Date().toISOString() 
  },
];

const Reviews = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            User Feedback
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyReviews.map((review) => (
            <div 
              key={review._id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <span className="text-5xl text-blue-200 leading-none block mb-4">“</span>
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  {review.message}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold uppercase text-sm">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews