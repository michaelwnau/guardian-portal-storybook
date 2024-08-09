import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';

export const EventCard = ({
  image,
  imageTitle,
  title,
  description,
  subtitle,
  shareButtonText,
  learnMoreButtonText,
  ctaText
}) => {
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-media">
          <img src={image} alt={imageTitle} />
        </div>
        <div className="event-card-content">
          <h2 className="event-card-title">{title}</h2>
          <p className="event-card-description">{description}</p>
          <p className="event-card-subtitle">{subtitle}</p>
          <div className="event-card-actions">
            <button className="event-card-button">{shareButtonText}</button>
            <button className="event-card-button">{learnMoreButtonText}</button>
          </div>
          <div className="event-card-cta">
            <span className="event-card-cta-text">{ctaText}</span>
            <div className="event-card-cta-icon">
              <img src="/images/arrow-forward-filled.svg" alt="Forward arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  shareButtonText: PropTypes.string,
  learnMoreButtonText: PropTypes.string,
  ctaText: PropTypes.string
};

EventCard.defaultProps = {
  image: '/images/lizard.jpg',
  imageTitle: 'Event image',
  title: 'Event Title',
  description: 'Event description goes here. It can be a brief overview of what the event is about.',
  subtitle: 'Additional information',
  shareButtonText: 'Share',
  learnMoreButtonText: 'Learn More',
  ctaText: 'Call to Action'
};
