import EventsCard from './EventsCard';
import TopMatchesCard from './TopMatchesCard';

const Hero = () => {
    const popularEvents = [
        {
            _id: '1',
            imageUrl: '/assets/images/test.png',
            title: 'Weeknd Consert',
            startDateTime: '2024-12-15T09:00:00',
            isFree: false,
            price: 2500,
            category: { name: 'Music' },
            organizer: { firstName: 'John', lastName: 'Doe', _id: '123' },
        },
        {
            _id: '2',
            imageUrl: '/assets/images/test-2.png',
            title: 'RAY, a success story',
            startDateTime: '2024-12-20T18:00:00',
            isFree: true,
            price: 0,
            category: { name: 'Book Launch' },
            organizer: { firstName: 'Alice', lastName: 'Smith', _id: '124' },
        },
        {
            _id: '3',
            imageUrl: '/assets/images/test.png',
            title: 'Web3 and Blockchain',
            startDateTime: '2024-12-25T07:30:00',
            isFree: false,
            price: 1500,
            category: { name: 'Tech' },
            organizer: { firstName: 'Bob', lastName: 'Johnson', _id: '125' },
        },
    ];
    return (
        <>
            <section className="py-20 bg-primary-50">
                <div className="container mx-auto px-4 mb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <h1 className="text-6xl font-bold mb-4 leading-tight">
                                Host, Connect, Celebrate: <br />
                                Your Events, Our Platform!
                            </h1>
                            <p className="text-lg mb-8 text-gray-600">
                                Book and manage events with ease. Join a community of enthusiasts and organizers.
                            </p>
                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                <input
                                    type="text"
                                    placeholder="Search Event"
                                    className="border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#725EF6]"
                                />
                                <button className="text-white bg-[#725EF6] hover:bg-violet-700 py-3 px-7 rounded-full">
                                    Find Event
                                </button>
                            </div>
                        </div>
                        <div className="relative pl-20">
                            <img
                                src="/assets/images/hero.png"
                                alt="Hero"
                                width={400}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Events Section */}
            <section className="m-5">
                <div className="container mx-auto px-4 mb-5">
                    <h2 className="text-4xl font-bold mb-8 text-center">Popular Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {popularEvents.map((event) => (
                            <EventsCard key={event._id} event={event} hasOrderLink={false} hidePrice={false} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;