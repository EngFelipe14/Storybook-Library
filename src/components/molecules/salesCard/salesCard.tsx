import type { JSX } from "react";
import type { ISalesCard } from "./salesCard.types";
import { Heading } from "../../atoms/heading/heading";
import { Paragraph } from "../../atoms/paragraph/paragraph";
import { Button } from "../../atoms/button/button";
import "./salesCard.css";

export const SalesCard = (props: ISalesCard): JSX.Element => {
  const { heading, variant, description, price, period, ctaText, className } = props;

  return (
    <div className={`sales-card sales-card-${variant}  ${className}`}>
      <div className="container-heading-description">
        <Heading level={3} variant="default" headingSize="xl">{heading}</Heading>
        <Paragraph>{description}</Paragraph>
      </div>
      <div className="sales-card-price">
        <Paragraph>{price}</Paragraph>
        <Paragraph>{period}</Paragraph>
      </div>
      <Button variant='ghost' backgroundColor="bg-blue-500" size="md" className={`sales-card-button`}>{ctaText}</Button>
    </div>
  )
}