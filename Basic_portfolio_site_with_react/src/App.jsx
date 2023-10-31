import Header from './Header'
import Hero from './Hero_Sect'
import Services from './Sub-Hero'
import {Testimonials, FAQs} from "./Data";
import Satisfaction from "./Testimonials";
import FrequentQuestions from "./Faqs";
import './Styles/App.css'

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
            <Services />
            <section className="feedback">
                <h3>Here&apos;s what some of our Valued customers had to say</h3>
                <div className="testimonials">
                    {CustomerSatisfaction}
                </div>
            </section>
            <section className='faqs--section'>
                <h4>Frequently Asked Questions</h4>
                <div className="faqs">
                    {CustomerFaq}
                </div>
                
            </section>
        </>
    )
}