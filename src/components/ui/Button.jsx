import clsx from "clsx"

const Button = (props) => {
  const { className, ...otherProps } = props

  return <button className={clsx(className)} {...otherProps} />
}

export default Button
