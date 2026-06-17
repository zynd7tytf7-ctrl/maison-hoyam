"use client";
import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  collection: string;
  locale: 'en' | 'ar';
}

interface CartState {
  items: CartItem[];
  loaded: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'LOAD'; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.productId === action.item.productId);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.productId === action.item.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.item, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.productId !== action.productId) };
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter(i => i.productId !== action.productId) };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.productId === action.productId ? { ...i, quantity: action.quantity } : i
        ),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'LOAD':
      return { ...state, items: action.items, loaded: true };
    default:
      return state;
  }
}

interface CartContextType {
  cart: CartState;
  addToBag: (item: CartItem, locale: 'en' | 'ar') => void;
  removeFromBag: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearBag: () => void;
  totalItems: number;
  subtotal: number;
  isLoaded: boolean;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_KEY = 'maison-hoyam-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], loaded: false });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'LOAD', items: parsed });
          return;
        }
      }
    } catch {}
    dispatch({ type: 'LOAD', items: [] });
  }, []);

  // Save to localStorage on every change
  useEffect(() => {
    if (cart.loaded) {
      localStorage.setItem(CART_KEY, JSON.stringify(cart.items));
    }
  }, [cart.items, cart.loaded]);

  const addToBag = useCallback((item: CartItem, locale: 'en' | 'ar') => {
    dispatch({ type: 'ADD_ITEM', item });
    const msg = locale === 'ar' ? 'تمت الإضافة إلى الحقيبة' : 'Added to bag';
    toast.success(msg, {
      duration: 2500,
      style: {
        background: 'linear-gradient(135deg, #2C1810, #1A0F0A)',
        border: '1px solid rgba(212,165,116,0.3)',
        color: '#D4A574',
      },
    });
  }, []);

  const removeFromBag = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  }, []);

  const clearBag = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToBag,
        removeFromBag,
        updateQuantity,
        clearBag,
        totalItems,
        subtotal,
        isLoaded: cart.loaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
