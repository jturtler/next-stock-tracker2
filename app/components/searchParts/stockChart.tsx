import { useEffect, useRef, useState } from "react";
import { Button } from "../common/Button";
import { FaSpinner } from "react-icons/fa";
import SpinningIcon from "../common/SpinningIcon";

export default function StockChart({ symbol }: { symbol: string }) {

	/*
	const [searchKey, setSearchcKey] = useState('');
	const [tickerData, setTickerData] = useState([]);
	const inputRef = useRef<HTMLInputElement>(null);
	*/
	const [loading, setLoading] = useState<boolean>(true); // Loading state

	console.log( 'symbol 1: ' + symbol );

	useEffect( () => {

		console.log( 'symbol 2: ' + symbol );

		if ( symbol )
		{
			console.log( 'Retrieving for ChartData..' );

			fetch('/api/chartData?symbol=' + symbol + '&startDate=2024-09-01&endDate=2024-09-05&interval=1m' )
			.then( (response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				 }
				return response.json();
			}).then( (responseJson: any) => {
				console.log( responseJson );  // put it on 'state'?
				setLoading(false);
			})     
			.catch((error) => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
		}
		else { console.log( 'no symbol' ); }
	}, [symbol]);

	return (
		<div className=" text-black">
			{ loading && <div> Loading.. </div> }
		</div>
	);
};