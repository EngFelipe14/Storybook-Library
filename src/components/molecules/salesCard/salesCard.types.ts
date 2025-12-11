import type { HTMLAttributes } from "react";

type VariantSaleCard = 'default';

interface BaseSalesCard extends HTMLAttributes<HTMLDivElement> {
	heading: string,
	variant: VariantSaleCard,
	description: string,
	price: string | number,
	period: string,
	ctaText: string,
	className?: string;
} 

interface SalesCardDefault extends BaseSalesCard {
	variant: 'default';
}

export type ISalesCard = SalesCardDefault;
