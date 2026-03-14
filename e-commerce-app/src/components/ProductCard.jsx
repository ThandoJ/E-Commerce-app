import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { Link } from "react-router-dom"
import Button from "../assets/Button.png"

export default function ProductCard({ product }) {

  const dispatch = useDispatch()

  return (

    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">

      {/* Link to product page */}

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-28 h-28 object-contain mb-4 cursor-pointer"
        />
      </Link>

      <h2 className="font-semibold">{product.name}</h2>

      <p className="text-gray-400 text-sm">{product.subtitle}</p>

      <div className="flex justify-between w-full mt-4 items-center">

        <p className="font-bold">${product.price}</p>

        <button
          className="bg-black text-white w-8 h-8 rounded-lg flex items-center justify-center"
          onClick={() => dispatch(addToCart(product))}
        >
         <img src={Button} className="w-6 h-6" />
        </button>

      </div>

    </div>
  )
}