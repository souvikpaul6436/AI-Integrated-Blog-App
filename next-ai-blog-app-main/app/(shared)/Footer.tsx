import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Welcome to the Blog of the Future! We're your guides to the
            frontiers of innovation, exploring the intersections of technology,
            culture, and beyond. Welcome aboard!
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="https://iips.com.pk/the-future-of-ai-trends-and-predictions-for-2024-and-beyond/#:~:text=Predictions%20for%20the%20Future%20of%20AI%20(Beyond%202024)%3A&text=Enhanced%20personalization%20through%20AI%2Ddriven,on%20individual%20preferences%20and%20behaviors.">
              The Future of AI: Trends and Predictions
            </a>
          </p>
          <p className="my-5">
            <a href="https://news.harvard.edu/gazette/story/2020/10/ethical-concerns-mount-as-ai-takes-bigger-decision-making-role/">
              Ethical Considerations in AI Development
            </a>
          </p>
          <p>
            <a href="https://buildprompt.ai/blog/ai-applications-that-are-transforming-industries/">
              AI Applications Transforming Industries
            </a>
          </p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            <a href="mailto:contact@email.com">contact@email.com</a>
          </p>
          <p>
            <a href="tel:+13334256825">(333) 425-6825</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
