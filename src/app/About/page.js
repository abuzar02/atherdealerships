import React from 'react'
import Image from 'next/image'
import secpic1 from "../component/images/achivment.jpg"
import buildpic from "../component/images/buildtrust.jpg"
import achiving from "../component/images/supportandtraining.jpg"
import success from "../component/images/into1.jpg"
import finence from "../component/images/finence.jpg"
import cool from "../component/images/cool-motorcycle-indoors.jpg"
import "../style/about.css"



const page = () => {
  return (
    <>
    <div className='front'>
      <Image src={cool}/>
      <div className='about-con'> 
        <h1>About us</h1>
        </div>
    </div>

        <div className='ab-main container'>

            <div className='main-box1'>
              <div>
                <h1>Success Stories</h1>
                <p>Ather Energy has been a trailblazer in the electric vehicle (EV) industry, empowering dealers and customers alike with cutting-edge technology, sustainable energy solutions, and innovative mobility experiences. Our network of dealers plays a crucial role in bringing Ather’s vision to life, enabling us to expand across regions and meet the growing demand for eco-friendly transportation solutions. From our early beginnings to the rapid expansion of our dealership network, the stories of success and growth from our partners are a testament to the value Ather Energy brings to the table.</p>
              </div>
              <div className='sec1img'>
                  <Image src={secpic1} />
              </div>
            </div>

          <div className='main-box1'>
          <div className='sec1img'>
                <Image src={buildpic} />
            </div>
            <div>
              <h1>A Strong Partnership, Built on Trust</h1>
              <p>Dealers who partner with Ather Energy don’t just get a product to sell—they enter a long-term relationship grounded in mutual trust, comprehensive support, and shared goals. With a dedicated support system in place, our dealers are equipped with the necessary tools to succeed in a highly competitive market. From sales and marketing resources to technical training and after-sales support, Ather’s commitment to its dealers is unwavering.</p>
              <p>Our dealer network is more than just a channel to deliver our products. It is a vital part of our success story. Many of our dealers have shared their experiences about how their business has transformed since joining hands with Ather Energy. These stories highlight the tangible benefits, including increased sales, heightened brand visibility, and customer loyalty, all of which are key factors in the overall success of a dealership.</p>
            </div> 
          </div>

          <div className='main-box1'>
            <div>
              <h1>Achieving Growth through Innovation</h1>
              <p>The EV market is evolving rapidly, and Ather Energy’s innovative approach has allowed our dealers to stay ahead of the curve. By offering state-of-the-art electric scooters with advanced features, we ensure that our dealers can offer products that appeal to a wide range of customers, from tech enthusiasts to environmentally conscious commuters. This has been a key factor in the growth and expansion of our dealer network.</p>
            <p>One of our dealers, based in Mumbai, shared how Ather’s product innovation helped them distinguish themselves in the local market. "We were initially hesitant to enter the EV market because we weren’t sure how customers would respond. But after seeing Ather’s product line and understanding their commitment to innovation, we knew we had to be a part of it. Ather scooters are not just about mobility; they’re about enhancing the customer experience. The technology, the design, and the performance have really resonated with our customers. As a result, we’ve seen significant growth in our sales figures."</p>
            <p>By focusing on creating products that deliver more than just a ride, Ather has helped its dealers grow their businesses. Dealers have reported increased foot traffic to their showrooms, as Ather’s electric scooters have drawn attention from all age groups. Whether it’s the smart dashboard that integrates with smartphones or the eco-friendly aspect of the scooters, customers are eager to learn more about what Ather has to offer.</p>
            </div>
            <div className='sec1img'>
                <Image src={achiving} />
            </div>
          </div>

          <div className='main-box1'>
          <div className='sec1img'>
                <Image src={success} />
            </div>
            <div>
              <h1> Support and Training: A Key to Success</h1>
              <p>
              Beyond the products themselves, Ather Energy provides a comprehensive support system for its dealers. The company offers technical training programs to ensure that dealers and their staff are well-equipped to handle all aspects of the sales and service process. This training covers everything from understanding the technical specifications of the scooters to providing top-notch after-sales support for customers.
            </p>
            <p>One of our dealers in Bangalore noted, "Ather’s training programs have been instrumental in our success. Not only do they train us on the technical side of things, but they also offer guidance on customer interactions and after-sales service. This has helped us build trust with our customers, who know that we are well-informed and ready to provide the best possible service. The result has been a steady increase in customer satisfaction and repeat business."</p>
            <p>
              By offering regular updates and continuous training, Ather ensures that its dealers are always up-to-date with the latest developments in the EV space. This has proven to be a game-changer for many dealers, who have used this knowledge to educate their customers and provide a superior buying experience.
            </p>
            </div> 
          </div>

          
          <div className='main-box1'>
            <div>
              <h1>The Financial Impact: Boosting Sales and Profits</h1>
              <p>One of the most significant success metrics for any dealership is the financial impact of their partnership with a brand. Ather Energy has proven to be a highly profitable venture for many of its dealers, thanks to the increasing demand for electric vehicles and the company’s focus on quality and customer satisfaction.</p>
            <p>Several dealers have reported a sharp increase in sales since partnering with Ather. For instance, a dealer in Delhi shared, "When we first started, we were selling around 15-20 scooters per month. Now, we’re easily selling over 50 scooters every month. The demand for Ather’s products is growing, and our reputation as a trusted dealer in the community has also helped. It’s not just about the numbers; it’s about the consistent growth we’ve seen in both sales and customer engagement."</p>
            <p>The financial success of Ather’s dealers is further supported by the company’s marketing initiatives. From digital marketing campaigns to in-store promotions, Ather works closely with its dealers to create effective strategies that drive traffic and increase sales. This collaboration ensures that dealers have the resources they need to succeed in their respective markets.</p>
            </div>
            <div className='sec1img'>
                <Image src={finence} />
            </div>
          </div> 

          </div>
    </>
  )
}

export default page;