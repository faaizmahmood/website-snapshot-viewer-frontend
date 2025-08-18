/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 🔹 Hook handles submission + business logic
const useHome = () => {

  const [loading, setLoading] = useState(false);
  const [snapshots, setSnapshots] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Yup validation schema for domains
  const domainSchema = Yup.object().shape({
    domain: Yup.string()
      .matches(
        /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,11}$/,
        "Please enter a valid domain (e.g., example.com)"
      )
      .required("Domain is required"),
  });

  // 🔹 Handle form submit
  const handleDomainSubmit = async (domain: string) => {
    try {
      setSnapshots([]);
      setLoading(true);
      setError(null);

      // Call your backend API
      const res = await axios.get(`${API_BASE_URL}/shots/snapshots?domain=${domain}`);
      setSnapshots(res.data);
      toast.success(`Found ${res.data.length} snapshots for ${domain}`);
    } catch (err: any) {
      const msg = err.response?.data?.error || "Something went wrong";
      setError(err.response?.data?.error || "Something went wrong");
      setSnapshots([]);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return {
    domainSchema,
    handleDomainSubmit,
    loading,
    snapshots,
    error,
  };
};

export default useHome;
