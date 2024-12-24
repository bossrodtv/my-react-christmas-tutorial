import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

export type ButtonWithoutRefProps = {
  buttonRef: React.RefObject<HTMLButtonElement>;
  onClick: () => void;
  children: React.ReactNode;
};

export function ButtonWithoutRef({
  buttonRef,
  onClick,
  children,
}: ButtonWithoutRefProps) {
  return (
    <button ref={buttonRef} onClick={onClick}>
      {children}
    </button>
  );
}

export type ButtonWithRefProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonWithRefProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export function SampleComponent() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <div>
      Sample Component
      <ButtonWithRef ref={buttonRef} onClick={() => console.log("clicked")}>
        Click me
      </ButtonWithRef>
    </div>
  );
}
