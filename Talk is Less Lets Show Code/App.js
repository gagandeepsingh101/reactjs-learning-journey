import React from "react";
import ReactDOM from "react-dom/client";

let resArrayobj = [
	{
		info: {
			id: "639017",
			name: "Subway",
			cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
			locality: "Umrao Mall",
			areaName: "Nishatganj",
			costForTwo: "₹350 for two",
			cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
			avgRating: 3.7,
			feeDetails: {
				restaurantId: "639017",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2500,
			},
			parentId: "2",
			avgRatingString: "3.7",
			totalRatingsString: "1K+",
			promoted: true,
			adTrackingId:
				"cid=9222374~p=2~eid=0000018b-a38c-e78e-07b9-2f8e00d40221~srvts=1699256002446~45995",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 4,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "4.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 04:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=639017",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "59122",
			name: "Sardar Ji Ke Mashoor Chhole Bhature",
			cloudinaryImageId: "f19fe5dd4320865a2dd675d940d92d31",
			areaName: "Lalbagh",
			costForTwo: "₹50 for two",
			cuisines: ["North Indian", "Punjabi"],
			avgRating: 4.1,
			veg: true,
			feeDetails: {
				restaurantId: "59122",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "6646",
			avgRatingString: "4.1",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹199",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=59122",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "59824",
			name: "Mashi Biryani World",
			cloudinaryImageId: "q0t8dkpigeideecc1hun",
			locality: "BN Road",
			areaName: "Lalbagh",
			costForTwo: "₹150 for two",
			cuisines: ["North Indian", "Biryani"],
			avgRating: 4,
			feeDetails: {
				restaurantId: "59824",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "6332",
			avgRatingString: "4.0",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 26,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "26 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=59824",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "64991",
			name: "Rattilal's",
			cloudinaryImageId: "vsdxtvuz2czmvdgcsggq",
			locality: "Shivaji Marg",
			areaName: "Aminabad",
			costForTwo: "₹60 for two",
			cuisines: ["Sweets", "North Indian", "Snacks"],
			avgRating: 3.7,
			veg: true,
			feeDetails: {
				restaurantId: "64991",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "6338",
			avgRatingString: "3.7",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 1.9,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "1.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=64991",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "75446",
			name: "Jahangir Hotel",
			cloudinaryImageId: "d4638e3377ec4f03a7435c3c61849837",
			locality: "Nishat Ganj",
			areaName: "Nishat Ganj",
			costForTwo: "₹300 for two",
			cuisines: ["Biryani", "Mughlai", "Rolls & Wraps"],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: "75446",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2500,
			},
			parentId: "108288",
			avgRatingString: "3.9",
			totalRatingsString: "10K+",
			promoted: true,
			adTrackingId:
				"cid=9259656~p=4~eid=0000018b-a38c-e78e-07b9-2f9000d40406~srvts=1699256002446~45995",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 4.3,
				serviceability: "SERVICEABLE",
				slaString: "25 mins",
				lastMileTravelString: "4.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=75446",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "65085",
			name: "Mughal Zaika Aminabad",
			cloudinaryImageId: "yood4aumr1wbxed1odxk",
			locality: "Naaz Cinema Road",
			areaName: "Aminabad",
			costForTwo: "₹300 for two",
			cuisines: ["Mughlai"],
			avgRating: 4,
			feeDetails: {
				restaurantId: "65085",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2500,
			},
			parentId: "140984",
			avgRatingString: "4.0",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 28,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "28 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=65085",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "59260",
			name: "Sharma Ji Ki Chai Hazratganj",
			cloudinaryImageId: "pw12rxgsaugd9xh7pgrh",
			locality: "Trilok nath road",
			areaName: "Lalbagh",
			costForTwo: "₹50 for two",
			cuisines: ["Snacks", "Beverages"],
			avgRating: 4.4,
			veg: true,
			feeDetails: {
				restaurantId: "59260",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "182118",
			avgRatingString: "4.4",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 19:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=59260",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "231204",
			name: "Burger King",
			cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
			locality: "Hazratganj",
			areaName: "Hazratganj",
			costForTwo: "₹350 for two",
			cuisines: ["Burgers", "American"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "231204",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "166",
			avgRatingString: "4.1",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 1,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "1.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 03:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=231204",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "635227",
			name: "Bakingo",
			cloudinaryImageId: "9fc6c247e09254670265953d03701280",
			locality: "Gokhle Marg",
			areaName: "Hazratganj",
			costForTwo: "₹299 for two",
			cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
			avgRating: 4.5,
			feeDetails: {
				restaurantId: "635227",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2500,
			},
			parentId: "3818",
			avgRatingString: "4.5",
			totalRatingsString: "1K+",
			promoted: true,
			adTrackingId:
				"cid=9109478~p=7~eid=0000018b-a38c-e78e-07b9-2f9300d40728~srvts=1699256002446~45995",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "25 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=635227",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "103385",
			name: "Ram Asrey",
			cloudinaryImageId: "e74rotky4rxzvtcgztx7",
			locality: "Nawal Kishore Road",
			areaName: "Hazratganj",
			costForTwo: "₹150 for two",
			cuisines: ["Snacks", "Desserts", "Sweets"],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: "103385",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2800,
			},
			parentId: "166229",
			avgRatingString: "4.3",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 18,
				lastMileTravel: 1,
				serviceability: "SERVICEABLE",
				slaString: "18 mins",
				lastMileTravelString: "1.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 22:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=103385",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "532693",
			name: "McDonald's",
			cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
			locality: "Habibullah Estate Road",
			areaName: "Hazratganj",
			costForTwo: "₹400 for two",
			cuisines: ["American"],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "532693",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 1900,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 1900,
			},
			parentId: "630",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 1.1,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "1.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=532693",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "405025",
			name: "KFC",
			cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
			locality: "Sahara Ganj Mall",
			areaName: "Hazratganj",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "405025",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3000,
			},
			parentId: "547",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 1.8,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "1.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=405025",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "348867",
			name: "Sharma Chai",
			cloudinaryImageId: "exww7yaq2jt0plvfdtil",
			locality: "Balmiki Marg",
			areaName: "Lalbagh",
			costForTwo: "₹100 for two",
			cuisines: ["Snacks", "Beverages", "North Indian"],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: "348867",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "182054",
			avgRatingString: "4.3",
			totalRatingsString: "5K+",
			promoted: true,
			adTrackingId:
				"cid=9305452~p=8~eid=0000018b-a38c-e78e-07b9-2f9400d40830~srvts=1699256002446~45995",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 2.1,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "2.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 20:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=348867",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "59941",
			name: "Marksmen",
			cloudinaryImageId: "tezzkxsqjop8fhxc9cqt",
			locality: "Lalbagh",
			areaName: "Lalbagh",
			costForTwo: "₹400 for two",
			cuisines: ["Chinese", "South Indian", "Fast Food"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "59941",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "132694",
			avgRatingString: "4.1",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=59941",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "79252",
			name: "Ajay Khaste (Hussain Ganj)",
			cloudinaryImageId: "tf6zjjlsk30mpnmckn5f",
			areaName: "Husain Ganj",
			costForTwo: "₹150 for two",
			cuisines: ["Snacks", "North Indian"],
			avgRating: 3.8,
			veg: true,
			feeDetails: {
				restaurantId: "79252",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "28273",
			avgRatingString: "3.8",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=79252",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "65094",
			name: "Sardar ji Ke Mashoor Chhole Bhature Punjabi Zaiqa",
			cloudinaryImageId: "qlrgb6tidtiqm0bsxeap",
			areaName: "Lalbagh",
			costForTwo: "₹100 for two",
			cuisines: [
				"Punjabi",
				"North Indian",
				"Desserts",
				"Thalis",
				"Indian",
				"Snacks",
				"Fast Food",
				"Continental",
			],
			avgRating: 3.9,
			veg: true,
			feeDetails: {
				restaurantId: "65094",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2000,
			},
			parentId: "178214",
			avgRatingString: "3.9",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 24,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "24 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 22:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=65094",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "614570",
			name: "Subway",
			cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
			locality: "Sector 10",
			areaName: "Rohini",
			costForTwo: "₹350 for two",
			cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
			avgRating: 3.8,
			feeDetails: {
				restaurantId: "614570",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "2",
			avgRatingString: "3.8",
			totalRatingsString: "500+",
			promoted: true,
			adTrackingId:
				"cid=9222374~p=1~eid=0000018b-a383-06fe-0776-580000ff013f~srvts=1699255355134~45995",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									shortDescription: "options available",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									description: "",
								},
							},
						],
					},
					textBased: {},
					imageBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "40% OFF",
				subHeader: "UPTO ₹80",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=614570",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "498382",
			name: "Burger King",
			cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
			locality: "M2K Mall",
			areaName: "Rohini",
			costForTwo: "₹350 for two",
			cuisines: ["Burgers", "American"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "498382",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "166",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=498382",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "254192",
			name: "McDonald's",
			cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
			locality: "Sector 10",
			areaName: "Rohini",
			costForTwo: "₹400 for two",
			cuisines: ["American"],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "254192",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "630",
			avgRatingString: "4.2",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=254192",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "27025",
			name: "KFC",
			cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
			locality: "Unity One Mall",
			areaName: "Rohini",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "27025",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4500,
			},
			parentId: "547",
			avgRatingString: "4.1",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 2.3,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "2.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=27025",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "444780",
			name: "Theobroma",
			cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
			locality: "Sector 3",
			areaName: "Rohini",
			costForTwo: "₹850 for two",
			cuisines: ["Bakery", "Desserts"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "444780",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4500,
			},
			parentId: "1040",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			promoted: true,
			adTrackingId:
				"cid=9121073~p=2~eid=0000018b-a383-06fe-0776-580100ff0271~srvts=1699255355134~45995",
			sla: {
				deliveryTime: 17,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "17 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "newg.png",
						description: "Gourmet",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "newg.png",
									description: "Gourmet",
								},
							},
						],
					},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "10% OFF",
				subHeader: "ABOVE ₹159",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=444780",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "258189",
			name: "Great Indian Khichdi by EatFit",
			cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
			locality: "Village Naharpur",
			areaName: "Pushpanjali",
			costForTwo: "₹200 for two",
			cuisines: [
				"Home Food",
				"Indian",
				"North Indian",
				"Healthy Food",
				"Snacks",
				"Desserts",
				"Rajasthani",
				"South Indian",
				"Maharashtrian",
				"Sweets",
			],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: "258189",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "319582",
			avgRatingString: "4.3",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textExtendedBadges: {},
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=258189",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "341033",
			name: "Bakingo",
			cloudinaryImageId: "rmnzl74nmlldrsv9bnvk",
			locality: "Rithala",
			areaName: "Rohini",
			costForTwo: "₹300 for two",
			cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "341033",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5100,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5100,
			},
			parentId: "3818",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 00:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=341033",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "390153",
			name: "NH1 Bowls - Highway To North",
			cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
			locality: "Sector 7",
			areaName: "Prashant Vihar",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "Punjabi", "Home Food"],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "390153",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4500,
			},
			parentId: "22452",
			avgRatingString: "4.2",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 18,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "13-23 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 02:00:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									description: "",
									shortDescription: "options available",
								},
							},
						],
					},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹399",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=390153",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "73682",
			name: "Biryani Blues",
			cloudinaryImageId: "gxbxedlx55lowkfhtbmi",
			locality: "Rohini",
			areaName: "Rohini",
			costForTwo: "₹400 for two",
			cuisines: [
				"Biryani",
				"Hyderabadi",
				"Lucknowi",
				"Kebabs",
				"Desserts",
				"Beverages",
			],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "73682",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "13813",
			avgRatingString: "4.2",
			totalRatingsString: "10K+",
			promoted: true,
			adTrackingId:
				"cid=9278427~p=4~eid=0000018b-a383-06fe-0776-580300ff0448~srvts=1699255355134~45995",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 1.8,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "1.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 03:00:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									shortDescription: "options available",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
								},
							},
						],
					},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=73682",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "10324",
			name: "Jaiveer Naan & Chaap",
			cloudinaryImageId: "03704a7e088a34643f5e72923d0d74ba",
			locality: "Sector 3",
			areaName: "Rohini",
			costForTwo: "₹500 for two",
			cuisines: ["North Indian", "Snacks", "Punjabi"],
			avgRating: 4.1,
			veg: true,
			feeDetails: {
				restaurantId: "10324",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "109221",
			avgRatingString: "4.1",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=10324",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "300087",
			name: "Shree Gopal Ji Ke Chhole Bhature",
			cloudinaryImageId: "p4fn2esrcxfeeefllnjz",
			locality: "Sector 2",
			areaName: "Rohini",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian", "Snacks"],
			avgRating: 4.5,
			veg: true,
			feeDetails: {
				restaurantId: "300087",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "184640",
			avgRatingString: "4.5",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 15,
				lastMileTravel: 0.8,
				serviceability: "SERVICEABLE",
				slaString: "15 mins",
				lastMileTravelString: "0.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 16:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=300087",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "378107",
			name: "Gaurav Pastry Palace",
			cloudinaryImageId: "tdp6ryzdqdi8cifuvty3",
			locality: "7Th Sector",
			areaName: "Rohini",
			costForTwo: "₹300 for two",
			cuisines: ["Desserts", "Bakery"],
			avgRating: 4.4,
			veg: true,
			feeDetails: {
				restaurantId: "378107",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "86613",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 19,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "19 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 21:29:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
					textBased: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "15% OFF",
				subHeader: "UPTO ₹45",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=378107",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "413816",
			name: "Cheesecake & Co.",
			cloudinaryImageId: "40b0a201eadbec469c2f9a06d5e7c722",
			locality: "Rama Market Park",
			areaName: "Pitampura",
			costForTwo: "₹350 for two",
			cuisines: ["Bakery", "Snacks"],
			avgRating: 4.4,
			veg: true,
			feeDetails: {
				restaurantId: "413816",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5300,
			},
			parentId: "387417",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			promoted: true,
			adTrackingId:
				"cid=9231537~p=5~eid=0000018b-a383-06fe-0776-580400ff050b~srvts=1699255355134~45995",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 3.5,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "3.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "newg.png",
						description: "Gourmet",
					},
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {
						badgeObject: [
							{
								attributes: {
									imageId: "newg.png",
									description: "Gourmet",
								},
							},
							{
								attributes: {
									imageId: "v1695133679/badges/Pure_Veg111.png",
									description: "pureveg",
								},
							},
						],
					},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=413816",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "780423",
			name: "Thalairaj Biryani",
			cloudinaryImageId: "f94637edc026ad1d5d2aa9b9a559bcf0",
			locality: "Sector 7",
			areaName: "Rohini",
			costForTwo: "₹250 for two",
			cuisines: ["Biryani", "Andhra", "South Indian", "Kebabs"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "780423",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "433875",
			avgRatingString: "4.4",
			totalRatingsString: "50+",
			sla: {
				deliveryTime: 19,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "19 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			isNewlyOnboarded: true,
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=780423",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "767725",
			name: "Love Poori Wala",
			cloudinaryImageId: "e554c893e09e1bb60f6c52e8373e0e08",
			locality: "Sector 2",
			areaName: "Rohini",
			costForTwo: "₹150 for two",
			cuisines: ["Indian", "North Indian", "Beverages"],
			avgRating: 4.9,
			veg: true,
			feeDetails: {
				restaurantId: "767725",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "13819",
			avgRatingString: "4.9",
			totalRatingsString: "10+",
			sla: {
				deliveryTime: 19,
				lastMileTravel: 0.6,
				serviceability: "SERVICEABLE",
				slaString: "19 mins",
				lastMileTravelString: "0.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			isNewlyOnboarded: true,
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=767725",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},
	{
		info: {
			id: "95944",
			name: "Raj Chinese Food",
			cloudinaryImageId: "pm4zvhuntljkxiv9sskx",
			locality: "Sector 3",
			areaName: "Rohini",
			costForTwo: "₹400 for two",
			cuisines: ["Chinese", "North Indian"],
			avgRating: 3.8,
			feeDetails: {
				restaurantId: "95944",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3700,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3700,
			},
			parentId: "16571",
			avgRatingString: "3.8",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 16,
				lastMileTravel: 1.8,
				serviceability: "SERVICEABLE",
				slaString: "16 mins",
				lastMileTravelString: "1.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 22:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					textBased: {},
					imageBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "40% OFF",
				subHeader: "UPTO ₹80",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "swiggy://menu?restaurant_id=95944",
			text: "RESTAURANT_MENU",
			type: "DEEPLINK",
		},
	},

	{
		info: {
			id: "424877",
			name: "Dilliwale Pahelvanjee'S Cholle Bhature",
			cloudinaryImageId: "tajbfx84hahoum5w9niz",
			locality: "Moti Begumwadi",
			areaName: "New Textile Market",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian", "Street Food"],
			avgRating: 4.4,
			veg: true,
			feeDetails: {
				restaurantId: "424877",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3800,
			},
			parentId: "289667",
			avgRatingString: "4.4",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 4,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "4.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 18:15:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/dilliwale-pahelvanjees-cholle-bhature-moti-begumwadi-new-textile-market-surat-424877",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "152983",
			name: "Jani Locho",
			cloudinaryImageId: "nni5t4imm0m5odzlqav6",
			locality: "Navyug College Road",
			areaName: "Adajan Patiya",
			costForTwo: "₹200 for two",
			cuisines: ["Gujarati", "Snacks"],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: "152983",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5000,
			},
			parentId: "22262",
			avgRatingString: "4.3",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 24,
				lastMileTravel: 6,
				serviceability: "SERVICEABLE",
				slaString: "24 mins",
				lastMileTravelString: "6.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 19:15:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/jani-locho-navyug-college-road-adajan-patiya-surat-152983",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "84562",
			name: "G Dada",
			cloudinaryImageId: "8ccc4ea2e0b6137b802c0a886fc8b3cb",
			locality: "Anand Mahal Road",
			areaName: "Adajan Gam, Main Branch- Since 1900",
			costForTwo: "₹250 for two",
			cuisines: ["Gujarati", "North Indian", "Snacks", "Street Food"],
			avgRating: 4.1,
			veg: true,
			feeDetails: {
				restaurantId: "84562",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4800,
			},
			parentId: "419400",
			avgRatingString: "4.1",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 6,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "6.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 00:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/g-dada-anand-mahal-road-adajan-gam-main-branch-since-1900-surat-84562",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "96048",
			name: "Shree Sai Snacks And Fast Food",
			cloudinaryImageId: "dbqj3eqdlxerbgwbknij",
			locality: "Palanpur Road",
			areaName: "Pal Gam",
			costForTwo: "₹200 for two",
			cuisines: ["South Indian", "Burgers", "Ice Cream", "Pizzas"],
			avgRating: 4.5,
			veg: true,
			feeDetails: {
				restaurantId: "96048",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5300,
			},
			parentId: "185558",
			avgRatingString: "4.5",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 7.9,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "7.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 22:50:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
						description: "OnlyOnSwiggy",
					},
					{
						imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
						description: "OnlyOnSwiggy",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "OnlyOnSwiggy",
									imageId:
										"v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
								},
							},
							{
								attributes: {
									description: "OnlyOnSwiggy",
									imageId:
										"v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/shree-sai-snacks-and-fast-food-palanpur-road-pal-gam-surat-96048",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "175281",
			name: "Jalaram Locho & Khaman",
			cloudinaryImageId: "ilmplqyvasqq0igkmobz",
			locality: "Gotalawadi",
			areaName: "Katargam",
			costForTwo: "₹200 for two",
			cuisines: ["Gujarati", "North Indian", "Indian", "Sweets"],
			avgRating: 4.1,
			veg: true,
			feeDetails: {
				restaurantId: "175281",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5000,
			},
			parentId: "230558",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 6.8,
				serviceability: "SERVICEABLE",
				slaString: "25 mins",
				lastMileTravelString: "6.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 19:45:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/jalaram-locho-and-khaman-gotalawadi-katargam-surat-175281",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "85749",
			name: "Jani Farsan House",
			cloudinaryImageId: "y0vfpjr1ej6jpehbsgzu",
			locality: "Canal Road",
			areaName: "Vesu",
			costForTwo: "₹300 for two",
			cuisines: ["Gujarati", "Indian"],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: "85749",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4800,
			},
			parentId: "109597",
			avgRatingString: "4.3",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 6.2,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "6.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 19:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/jani-farsan-house-canal-road-vesu-surat-85749",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "120319",
			name: "Maakhan Bhog",
			cloudinaryImageId: "da6f6bd02e88a1eb94c8446a5a5ecd87",
			locality: "Silicon Shopper",
			areaName: "Udhna Gam",
			costForTwo: "₹300 for two",
			cuisines: ["Desserts"],
			avgRating: 4.2,
			veg: true,
			feeDetails: {
				restaurantId: "120319",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2300,
			},
			parentId: "6999",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 18,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "18 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 21:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/maakhan-bhog-silicon-shopper-udhna-gam-surat-120319",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "401459",
			name: "Radhe Dhokla",
			cloudinaryImageId: "27947ad42435b18fc7d1f127e841748a",
			locality: "Ring Road",
			areaName: "Rustampura",
			costForTwo: "₹300 for two",
			cuisines: ["Chinese", "North Indian", "Biryani"],
			avgRating: 4.4,
			veg: true,
			feeDetails: {
				restaurantId: "401459",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2300,
			},
			parentId: "4921",
			avgRatingString: "4.4",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 20,
				lastMileTravel: 2.6,
				serviceability: "SERVICEABLE",
				slaString: "20 mins",
				lastMileTravelString: "2.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/radhe-dhokla-ring-road-rustampura-surat-401459",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "70750",
			name: "Surti Khaman House",
			cloudinaryImageId: "vhqptzx28p1jo8dgxp1j",
			locality: "Anand Mahal Road",
			areaName: "Anand Mahal",
			costForTwo: "₹180 for two",
			cuisines: ["Desserts"],
			avgRating: 3.9,
			veg: true,
			feeDetails: {
				restaurantId: "70750",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4300,
			},
			parentId: "197899",
			avgRatingString: "3.9",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 24,
				lastMileTravel: 5.8,
				serviceability: "SERVICEABLE",
				slaString: "24 mins",
				lastMileTravelString: "5.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 19:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/surti-khaman-house-road-anand-mahal-surat-70750",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "74644",
			name: "Burger King",
			cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
			locality: "VIP Road",
			areaName: "Vesu",
			costForTwo: "₹350 for two",
			cuisines: ["Burgers", "American"],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "74644",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4300,
			},
			parentId: "166",
			avgRatingString: "4.2",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 26,
				lastMileTravel: 5.9,
				serviceability: "SERVICEABLE",
				slaString: "26 mins",
				lastMileTravelString: "5.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/burger-king-vip-road-vesu-surat-74644",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "100721",
			name: "McDonald's",
			cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
			locality: "Reliance Mall",
			areaName: "Rustampura",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "100721",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2200,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2200,
			},
			parentId: "630",
			avgRatingString: "4.2",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/mcdonalds-reliance-mall-rustampura-surat-100721",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "65028",
			name: "Subway",
			cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
			locality: "Athwa",
			areaName: "Athwa",
			costForTwo: "₹350 for two",
			cuisines: [
				"Fast Food",
				"Healthy Food",
				"Salads",
				"Snacks",
				"Desserts",
				"Beverages",
			],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: "65028",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2300,
			},
			parentId: "2",
			avgRatingString: "3.9",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 3.5,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "3.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/subway-athwa-surat-65028",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "158293",
			name: "Madhi Ni Khamni",
			cloudinaryImageId: "ncdi2acbg6qfzeknrnug",
			locality: "Rampura Main Road",
			areaName: "Haripura",
			costForTwo: "₹250 for two",
			cuisines: ["Fast Food", "Snacks"],
			avgRating: 4,
			veg: true,
			feeDetails: {
				restaurantId: "158293",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4000,
			},
			parentId: "8349",
			avgRatingString: "4.0",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 4.7,
				serviceability: "SERVICEABLE",
				slaString: "25 mins",
				lastMileTravelString: "4.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 17:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
						description: "OnlyOnSwiggy",
					},
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "OnlyOnSwiggy",
									imageId:
										"v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
								},
							},
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/madhi-ni-khamni-rampura-main-road-haripura-surat-158293",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "217306",
			name: "Hotel Priya",
			cloudinaryImageId: "idfokjhfmaftfpmqfmmq",
			locality: "Atlanta Shopping Mall",
			areaName: "Althan Bhatar",
			costForTwo: "₹300 for two",
			cuisines: [
				"North Indian",
				"Punjabi",
				"South Indian",
				"Biryani",
				"Chinese",
			],
			avgRating: 4.3,
			veg: true,
			feeDetails: {
				restaurantId: "217306",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4500,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4500,
			},
			parentId: "21719",
			avgRatingString: "4.3",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 24,
				lastMileTravel: 5.5,
				serviceability: "SERVICEABLE",
				slaString: "24 mins",
				lastMileTravelString: "5.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 14:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/hotel-priya-atlanta-shopping-mall-althan-bhatar-surat-217306",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "395356",
			name: "McDonald's Gourmet Burger Collection",
			cloudinaryImageId: "lc3nzvveoffmj6jjsjlk",
			locality: "Reliance Mega Mall",
			areaName: "Udhana Darwaja",
			costForTwo: "₹500 for two",
			cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "395356",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 2300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 2300,
			},
			parentId: "10761",
			avgRatingString: "4.4",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 2,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "2.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-reliance-mega-mall-udhana-darwaja-surat-395356",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "410476",
			name: "The Brooklyn Creamery - Healthy Ice Cream",
			cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
			locality: "Rander Road",
			areaName: "Adajan",
			costForTwo: "₹200 for two",
			cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
			avgRating: 4,
			veg: true,
			feeDetails: {
				restaurantId: "410476",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5000,
			},
			parentId: "236673",
			avgRatingString: "4.0",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 29,
				lastMileTravel: 6.5,
				serviceability: "SERVICEABLE",
				slaString: "29 mins",
				lastMileTravelString: "6.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-rander-road-adajan-surat-410476",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "566378",
			name: "Faasos' Signature Wraps & Rolls",
			cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
			locality: "Nr Navyug College, Rander Road",
			areaName: "Adajan Patiya",
			costForTwo: "₹350 for two",
			cuisines: [
				"Fast Food",
				"Snacks",
				"North Indian",
				"Desserts",
				"Beverages",
			],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "566378",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4800,
			},
			parentId: "340366",
			avgRatingString: "4.1",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 6.4,
				serviceability: "SERVICEABLE",
				slaString: "33 mins",
				lastMileTravelString: "6.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-nr-navyug-college-rander-road-adajan-patiya-surat-566378",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "236434",
			name: "Starbucks Coffee",
			cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
			locality: "Athwalines",
			areaName: "City Light Town",
			costForTwo: "₹400 for two",
			cuisines: [
				"Beverages",
				"Cafe",
				"Snacks",
				"Desserts",
				"Bakery",
				"Ice Cream",
			],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "236434",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4200,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4200,
			},
			parentId: "195515",
			avgRatingString: "4.2",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 5.5,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "5.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/starbucks-coffee-athwalines-city-light-town-surat-236434",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "236083",
			name: "KFC",
			cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
			locality: "LP Savani Road",
			areaName: "Adajan Gam",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
			avgRating: 3.8,
			feeDetails: {
				restaurantId: "236083",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5200,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5200,
			},
			parentId: "547",
			avgRatingString: "3.8",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 31,
				lastMileTravel: 7.5,
				serviceability: "SERVICEABLE",
				slaString: "31 mins",
				lastMileTravelString: "7.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 02:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/kfc-lp-savani-road-adajan-gam-surat-236083",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "301186",
			name: "PVR Cafe",
			cloudinaryImageId: "m5kout6ypyjttj8cggwh",
			locality: "Rahul Raj Mall",
			areaName: "Piplod",
			costForTwo: "₹400 for two",
			cuisines: ["Snacks", "Fast Food", "Beverages"],
			avgRating: 3.7,
			feeDetails: {
				restaurantId: "301186",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5800,
			},
			parentId: "11664",
			avgRatingString: "3.7",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 8.1,
				serviceability: "SERVICEABLE",
				slaString: "30 mins",
				lastMileTravelString: "8.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-07 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/pvr-cafe-rahul-raj-mall-piplod-surat-301186",
			type: "WEBLINK",
		},
	},
];

let Header = () => {
	return (
		<div className="header">
			<div className="logo-contanier">
				<img
					className="image"
					src="https://cdn4.iconfinder.com/data/icons/food-delivery-72/64/online-order-food-meal-delivery-cuisine-256.png"
					alt=""
				/>
			</div>
			<div className="nav-container">
				<ul className="nav-list">
					<li className="nav-item">Home</li>
					<li className="nav-item">About Us</li>
					<li className="nav-item">Contact Us</li>
					<li className="nav-item">Login</li>
				</ul>
			</div>
		</div>
	);
};

let RestroComponent = (props) => {
	const { resData } = props;
	const {
		name,
		avgRating,
		cuisines,
		areaName,
		costForTwo,
		cloudinaryImageId,
		deliveryTime,
	} = resData.info;
	return (
		<div className="restro-profile">
			<img
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/" +
					cloudinaryImageId
				}
				alt=""
			/>
			<h4>{name}</h4>
			<h4>
				{avgRating} {deliveryTime}
			</h4>
			<p>{cuisines.slice(0, 3).join(" , ")}</p>
			<p>{areaName}</p>
			<p>{costForTwo}</p>
		</div>
	);
};
let RestroContainerComponent = () => {
	return (
		<div className="main-container">
			<div className="search-container">
				<input type="search" name="" id="" />
				<button>Search Item</button>
			</div>
			<div className="restro-container">
				{resArrayobj.map((restrunaut) => (
					<RestroComponent
						key={restrunaut.info.id}
						resData={restrunaut}></RestroComponent>
				))}
			</div>
		</div>
	);
};

let AppLayout = () => {
	return (
		<>
			<Header></Header>
			<RestroContainerComponent></RestroContainerComponent>
		</>
	);
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
