"use client";

export default function Footer() {
  return (
    <footer className="admin-footer text-center py-3 bg-white shadow-sm">
      <span className="text-muted">
        &copy; {new Date().getFullYear()} Vision Green. All rights reserved.
      </span>
    </footer>
  );
}
