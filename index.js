import {
  useRef,
  useState,
  useEffect,
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact';

export default (data) => {
  const ref = useRef(null);
  const [showHidden, setShowHidden] = useState(false);
  const [state, setState] = useState({
    visibleItems: data,
    hiddenItems: [],
  });

  const ro = new ResizeObserver((entries) => {
    let { width } = entries[0].contentRect;
    let visible = 0;

    for (const child of ref.current.children) {
      if (width > child.offsetWidth) visible++;
      const style = window.getComputedStyle(child);
      width =
        width -
        (child.offsetWidth +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight));
    }

    setState({
      ref,
      visibleItems: [
        ...data.slice(0, visible),
        ...data
          .slice(visible)
          .map((i) => ({ ...i, style: { visibility: 'hidden' } })),
      ],
      hiddenItems: data.slice(visible),
    });
  });

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    ro.observe(element);
    return () => ro.unobserve(element);
  }, [ref]);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      event.stopPropagation();
      setShowHidden(false);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref]);

  return { ...state, ref, showHidden, setShowHidden };
};
