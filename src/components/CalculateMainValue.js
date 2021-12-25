import { useSelector } from "react-redux"

export default function CalculateMainValue(){
    const framework = useSelector((state)=> state.framework);
    const selectedType = useSelector((state)=> state.selectedType);
    const UIUXReducer = useSelector((state)=> state.UIUXReducer);
    const PaymentMethod = useSelector((state)=> state.PaymentMethod);
    const TotalPage = useSelector((state)=> state.TotalPage);
    
    const total = framework.frameworkItems.price +
     selectedType.selectedType.price+
     UIUXReducer.UIUXReducer.priceUIUX
     +PaymentMethod.PaymentMethod.priceGateway
     +TotalPage.TotalPage.PricePage
     ;
    return(
        <div className="container">
            <p>Est Cost</p>
            <h2>{total}BDT</h2>
            <p>This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to dvelopment. Project will be dividd into 2-3 milestone payments.</p>
            
            <button className="btn btn-primary btn-holder">Start Your Project Now</button>
        </div>
    )
}