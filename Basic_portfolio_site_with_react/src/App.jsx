import Header from './Header'
import Hero from './Hero_Sect'
import Services from './Sub-Hero'
import {Testimonials, FAQs} from "./Data";
import Satisfaction from "./Testimonials";
import FrequentQuestions from "./Faqs";

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
            <Satisfaction />
            {CustomerSatisfaction}
            {CustomerFaq}
        </>
    )
}