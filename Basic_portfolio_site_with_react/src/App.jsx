import Header from './Header'
import Hero from './Hero_Sect'
import Services from './Services';
import AboutUs from './Sub-Hero'
import {Testimonials, FAQs} from "./Data";
import Satisfaction from "./Testimonials";
import FrequentQuestions from "./Faqs";
import Form from './From';
import Footer from './Footer';
import './Styles/App.css'
import './Styles/Responsive-Design.css'

export default function App() {
    const CustomerSatisfaction = Testimonials.map(item =>{

        return(
            <Satisfaction
            key={item.id}
            CustomerName={item.name}
            CustomerQoute={item.testimony}
            />
        )
        
    })

    const CustomerFaq = FAQs.map(FaqItem => {

        return (
            <FrequentQuestions
                key={FaqItem.id}
                question={FaqItem.question}
                answer={FaqItem.answer}
            />
            )
    })

    return(
        <>
            <Header />
            <Hero />
            <h2 className='services--head'>Our Process</h2>
            <Services />
            <hr />
            <section className="feedback">
                <h3>Here&apos;s what some of our Valued customers had to say</h3>
                <div className="testimonials">
                    {CustomerSatisfaction}
                </div>
            </section>
            <AboutUs />
            <section className='faqs--section'>
                <h4>Frequently Asked Questions</h4>
                <div className="faqs">
                    {CustomerFaq}
                </div>
                
            </section>
            <Form />
            <Footer />
        </>
    )
}