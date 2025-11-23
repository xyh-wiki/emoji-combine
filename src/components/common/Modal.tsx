// @Author:XYH
// @Date:2025-11-23
// @Description: 通用模态框组件，当前项目预留以便后续扩展

import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15,23,42,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 40
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{ maxWidth: 480, width: "90%", padding: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
        <div>{children}</div>
        <div style={{ textAlign: "right", marginTop: 16 }}>
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
